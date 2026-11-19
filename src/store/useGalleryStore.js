import { create } from 'zustand';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

const INITIAL_GALLERY_ITEMS = [
  {
    id: 1,
    type: 'image',
    category: 'Weddings',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Royal Wedding Setup',
    date: '2026-01-15'
  },
  {
    id: 2,
    type: 'image',
    category: 'Lighting',
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Fairy Lights Pathway',
    date: '2026-02-10'
  },
  {
    id: 3,
    type: 'video',
    category: 'Weddings',
    src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    title: 'Grand Palace Wedding Tour (Video)',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2026-03-01'
  },
  {
    id: 4,
    type: 'image',
    category: 'Corporate',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Annual Gala Stage',
    date: '2026-03-12'
  },
  {
    id: 5,
    type: 'image',
    category: 'Weddings',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Floral Mandap',
    date: '2026-03-25'
  },
  {
    id: 6,
    type: 'video',
    category: 'Lighting',
    src: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
    title: 'Night Lights & DJ Setup Reel',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2026-04-05'
  },
  {
    id: 7,
    type: 'image',
    category: 'Birthdays',
    src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Kids Birthday Theme',
    date: '2026-04-18'
  },
  {
    id: 8,
    type: 'image',
    category: 'Lighting',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Event Production Lights',
    date: '2026-05-02'
  },
  {
    id: 9,
    type: 'image',
    category: 'Weddings',
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Reception Entry',
    date: '2026-05-15'
  },
  {
    id: 10,
    type: 'image',
    category: 'Corporate',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Product Launch Setup',
    date: '2026-06-01'
  },
  {
    id: 11,
    type: 'image',
    category: 'Birthdays',
    src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Balloon Arch Decor',
    date: '2026-06-20'
  }
];

let stopGalleryListener;

const normalizeSource = (itemData) => {
    // Helper to format YouTube link into embed link if needed
    let finalSrc = itemData.src;
    if (itemData.type === 'video' && finalSrc) {
      if (finalSrc.includes('youtube.com/watch?v=')) {
        const videoId = finalSrc.split('watch?v=')[1]?.split('&')[0];
        if (videoId) finalSrc = `https://www.youtube.com/embed/${videoId}`;
      } else if (finalSrc.includes('youtu.be/')) {
        const videoId = finalSrc.split('youtu.be/')[1]?.split('?')[0];
        if (videoId) finalSrc = `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return {
      type: itemData.type || 'image',
      src: finalSrc,
      title: itemData.title || 'Event Decoration',
      category: itemData.category || 'Weddings',
      thumbnail: itemData.thumbnail || (itemData.type === 'video' ? 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' : finalSrc),
      date: new Date().toISOString().split('T')[0],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
};

export const useGalleryStore = create((set) => ({
  items: INITIAL_GALLERY_ITEMS,
  isLoading: true,
  error: null,

  subscribe: () => {
    if (stopGalleryListener) return stopGalleryListener;
    stopGalleryListener = onSnapshot(
      collection(db, 'galleryItems'),
      (snapshot) => {
        const remoteItems = snapshot.docs
          .map((item) => ({ id: item.id, ...item.data() }))
          .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
        set({ items: remoteItems.length ? remoteItems : INITIAL_GALLERY_ITEMS, isLoading: false, error: null });
      },
      (error) => {
        console.error('Unable to load gallery:', error);
        set({ error: error.message, isLoading: false });
      },
    );
    return stopGalleryListener;
  },

  addItem: async (itemData) => {
    if (itemData.src?.startsWith('data:') && itemData.src.length > 700000) {
      throw new Error('Uploaded media is too large for Firestore. Please use a hosted URL.');
    }
    return addDoc(collection(db, 'galleryItems'), normalizeSource(itemData));
  },

  deleteItem: (id) => deleteDoc(doc(db, 'galleryItems', String(id))),

  resetDefaultGallery: async () => {
    const batch = writeBatch(db);
    useGalleryStore.getState().items.forEach((item) => {
      if (typeof item.id === 'string') batch.delete(doc(db, 'galleryItems', item.id));
    });
    INITIAL_GALLERY_ITEMS.forEach((item) => {
      const reference = doc(collection(db, 'galleryItems'));
      const { id: _id, ...data } = item;
      batch.set(reference, { ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    });
    await batch.commit();
  },
}));
