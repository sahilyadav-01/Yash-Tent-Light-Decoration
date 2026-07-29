import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateQuotationPDF = (booking) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(22);
  doc.setTextColor(200, 16, 46); // #C8102E
  doc.text('Yash Tent & Light Decoration', 14, 20);
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('123 Celebration Avenue, Phase 1, City Name, 123456', 14, 28);
  doc.text('Sumit (kuku) Yadav: +91 9680709044 | Surendar kumar: +91 9818222764', 14, 34);
  
  // Quotation Title
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('OFFICIAL QUOTATION', 14, 50);
  
  // Booking Details
  doc.setFontSize(12);
  doc.text(`Booking ID: ${booking.id}`, 14, 60);
  doc.text(`Date of Event: ${booking.date}`, 14, 68);
  doc.text(`Event Type: ${booking.eventType}`, 14, 76);
  doc.text(`Venue: ${booking.venue}`, 14, 84);
  
  // Customer Details (Right side)
  doc.text(`Prepared For:`, 120, 60);
  doc.setFontSize(10);
  doc.text(`${booking.customerEmail}`, 120, 68);
  
  // Table of Services
  const tableData = [
    ['1', `${booking.package || 'Custom'} Decoration Package`, '1', `Rs. ${booking.amount.toLocaleString()}`],
    ['2', 'Logistics & Setup', '1', 'Included'],
    ['3', 'Lighting Assembly', '1', 'Included'],
  ];

  autoTable(doc, {
    startY: 100,
    head: [['S.No', 'Description of Service', 'Qty', 'Amount (INR)']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [200, 16, 46] }
  });
  
  // Totals
  const finalY = doc.lastAutoTable.finalY || 150;
  const gst = booking.amount * 0.18;
  const grandTotal = booking.amount + gst;
  
  doc.setFontSize(10);
  doc.text(`Subtotal: Rs. ${booking.amount.toLocaleString()}`, 140, finalY + 10);
  doc.text(`GST (18%): Rs. ${gst.toLocaleString()}`, 140, finalY + 18);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Grand Total: Rs. ${grandTotal.toLocaleString()}`, 140, finalY + 28);
  
  // Terms & Conditions
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Terms & Conditions:', 14, finalY + 50);
  doc.setFontSize(8);
  doc.text('1. 50% advance payment required to confirm the booking.', 14, finalY + 56);
  doc.text('2. Quotation is valid for 15 days from the generated date.', 14, finalY + 62);
  doc.text('3. Any changes in venue/date may incur additional charges.', 14, finalY + 68);
  
  // Save PDF
  doc.save(`Quotation_${booking.id}.pdf`);
};
