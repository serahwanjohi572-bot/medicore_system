# Health Bridge - Online Pharmacy & Doctor Booking

Health Bridge is a modern healthcare platform that connects patients with medicines and verified doctors. Order medicines online, book doctor appointments, and pay securely with M-Pesa.

## Features

- 🛒 **Browse & Purchase Medicines** - Wide selection of verified medicines with fast delivery
- 👨‍⚕️ **Doctor Appointments** - Book verified doctors online in seconds
- 💳 **Secure M-Pesa Payment** - Safe and easy payment processing
- 🛒 **Shopping Cart** - Add medicines and manage your orders
- 👤 **User Accounts** - Sign up, login, and manage your profile
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd health_bridge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
```

The app will be built for production in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── GetProducts.jsx        # Homepage with hero, products, promo sections
│   ├── Cart.jsx               # Shopping cart with item management
│   ├── Checkout.jsx           # Checkout page with order summary
│   ├── Appointment.jsx        # Doctor appointment booking
│   ├── MpesaPayment.jsx       # M-Pesa payment integration
│   ├── SignUp.jsx             # User registration
│   ├── SignIn.jsx             # User login
│   ├── NavBar.jsx             # Navigation bar with auth state
│   ├── Footer.jsx             # Footer with links and contact info
│   └── AddProducts.jsx        # Admin product management
├── App.js                     # Main app component with routing
├── App.css                    # Global styles
└── index.js                   # Entry point
```

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm run build`
Builds the app for production.

### `npm test`
Runs the test suite.

## API Endpoints

The app connects to:
- Backend API: `https://serahswala.alwaysdata.net/api/`

Key endpoints:
- `GET /api/get_product_details` - Fetch all medicines
- `POST /api/signup` - User registration
- `POST /api/signin` - User login
- `POST /api/mpesa_payment` - M-Pesa payment

## Technologies Used

- **React 19** - UI library
- **React Router 7** - Navigation
- **Bootstrap 5** - Styling
- **Axios** - HTTP client
- **localStorage** - Client-side data persistence

## License

This project is proprietary and belongs to Health Bridge.

## Contact

For support, reach out to:
- **Email:** support@healthbridge.com
- **Phone:** +254 720 000 000

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
