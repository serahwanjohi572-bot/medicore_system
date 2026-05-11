export const getAnalyticsMock = () => {
  // Mock datasets used until backend analytics endpoints exist.
  const monthlySales = [
    { month: 'Jan', value: 12000 },
    { month: 'Feb', value: 15500 },
    { month: 'Mar', value: 14000 },
    { month: 'Apr', value: 19000 },
    { month: 'May', value: 21000 },
    { month: 'Jun', value: 23000 },
    { month: 'Jul', value: 20500 },
    { month: 'Aug', value: 26000 },
    { month: 'Sep', value: 24500 },
    { month: 'Oct', value: 27500 },
    { month: 'Nov', value: 29000 },
    { month: 'Dec', value: 32000 },
  ];

  const ordersPerDay = [
    { day: 'Mon', value: 18 },
    { day: 'Tue', value: 24 },
    { day: 'Wed', value: 21 },
    { day: 'Thu', value: 29 },
    { day: 'Fri', value: 35 },
    { day: 'Sat', value: 31 },
    { day: 'Sun', value: 16 },
  ];

  const appointmentStats = [
    { status: 'Approved', value: 22 },
    { status: 'Pending', value: 9 },
    { status: 'Rejected', value: 3 },
  ];

  return { monthlySales, ordersPerDay, appointmentStats };
};

export const getOrdersMock = () => {
  return [
    {
      id: 'ORD-1001',
      customerName: 'John Kariuki',
      items: ['Atenolol x1', 'Aspirin x2'],
      paymentStatus: 'pending',
      deliveryStatus: 'yellow',
    },
    {
      id: 'ORD-1002',
      customerName: 'Mary Wanjiku',
      items: ['Methotrexate x1'],
      paymentStatus: 'paid',
      deliveryStatus: 'delivered',
    },
    {
      id: 'ORD-1003',
      customerName: 'Peter Otieno',
      items: ['Ibuprofen x1', 'Vitamin C x2'],
      paymentStatus: 'failed',
      deliveryStatus: 'cancelled',
    },
  ];
};

export const getAppointmentsMock = () => {
  return [
    {
      id: 'APT-2001',
      patientName: 'Salome N.',
      doctor: 'Dr. James Otieno',
      dateTime: '2026-05-07 10:30',
      status: 'approved',
    },
    {
      id: 'APT-2002',
      patientName: 'Brian K.',
      doctor: 'Dr. Ruth W.',
      dateTime: '2026-05-07 15:00',
      status: 'pending',
    },
    {
      id: 'APT-2003',
      patientName: 'Amina S.',
      doctor: 'Dr. George M.',
      dateTime: '2026-05-08 09:15',
      status: 'rejected',
    },
  ];
};

export const getPaymentsMock = () => {
  return [
    {
      id: 'MPESA-9Q2H1A3',
      amount: 5400,
      date: '2026-05-06',
      status: 'confirmed',
    },
    {
      id: 'MPESA-1K8P7T0',
      amount: 9200,
      date: '2026-05-07',
      status: 'pending',
    },
    {
      id: 'MPESA-X3C2B9Z',
      amount: 17500,
      date: '2026-05-07',
      status: 'failed',
    },
  ];
};

export const getUsersMock = () => {
  return [
    { id: 'USR-3001', name: 'John Kariuki', email: 'john@example.com', status: 'active' },
    { id: 'USR-3002', name: 'Mary Wanjiku', email: 'mary@example.com', status: 'blocked' },
    { id: 'USR-3003', name: 'Peter Otieno', email: 'peter@example.com', status: 'active' },
  ];
};

export const getReviewsMock = () => {
  return [
    {
      id: 'REV-4001',
      user: 'John Kariuki',
      rating: 5,
      comment: 'Fast service and good packaging!',
      status: 'approved',
    },
    {
      id: 'REV-4002',
      user: 'Mary Wanjiku',
      rating: 3,
      comment: 'Delivery was a bit slow, but overall okay.',
      status: 'pending',
    },
  ];
};

