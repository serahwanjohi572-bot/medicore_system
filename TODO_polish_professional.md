# TODO - Professional Polish Pass

## Step 1: Unified Toast system (CSS + shared component)
- [x] Add reusable toast component in `src/components/ui/Toast.jsx`
- [x] Add CSS rules in `src/App.css` for unified toast + transitions
- [x] Appointment wired to use the new toast styles


## Step 2: Wire success/error/loading to pages
- [ ] Update `GetProducts.jsx`: network error UI + empty state uses consistent styling
- [ ] Update `ProductCard.jsx` + `GetProducts.jsx`: quick add feedback uses toast
- [ ] Update `ProductDetails.jsx`: cart/wishlist messages use toast
- [ ] Update `Cart.jsx` + `Wishlist.jsx`: empty states + consistency
- [ ] Update `Appointment.jsx`: remove duplicate `canNextFromStep()` check + toast consistency
- [ ] Update `MpesaPayment.jsx`: add failure path + unified feedback

## Step 3: UI polish cleanup
- [ ] Reduce overly “rainbow” animations impact outside About/HealthTips (keep theme consistent)
- [ ] Normalize button styles where pages differ (spacing/hover)
- [ ] Verify navbar/footer theme consistency

## Step 4: Testing
- [ ] `npm test` / `npm run build`
- [ ] Manual QA: quick add, search empty, payment messages, booking toast

