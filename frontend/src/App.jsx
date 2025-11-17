import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import CartPage from "./pages/CartPage";
import { useCartStore } from "./stores/useCartStore";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PurchaseCancelPage from "./pages/PurchaseCancelPage";
import { useThemeStore } from "./stores/useThemeStore"; // Import useThemeStore

function App() {
    const { user, checkAuth, checkingAuth } = useUserStore();
    const { getCartItems } = useCartStore();
    const { theme } = useThemeStore(); // Get the current theme from your store

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        if (!user) return;
        getCartItems();
    }, [getCartItems, user]);

    // Apply the theme to the HTML element
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]); // Re-run when the theme changes

    if (checkingAuth) return <LoadingSpinner />;

    return (
        // Remove fixed background and text colors from this div
        // DaisyUI themes will handle them via 'bg-base-100', 'text-base-content', etc.
        <div className='min-h-screen relative overflow-hidden'> 
            {/* Remove the fixed background gradient divs as well if you want DaisyUI to fully control the background */}
            {/* If you want to keep a custom background, ensure it plays well with DaisyUI's base-100 */}
            {/* If you want to keep the gradient, you'll need to make it theme-aware or apply it in a way
                that doesn't conflict with DaisyUI's base colors. For now, I'm removing it for full DaisyUI control. */}
            
            <div className='relative z-50 pt-20'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to='/' />} />
                    <Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} />
                    <Route
                        path='/secret-dashboard'
                        element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login' />}
                    />
                    <Route path='/category/:category' element={<CategoryPage />} />
                    <Route path='/cart' element={user ? <CartPage /> : <Navigate to='/login' />} />
                    <Route
                        path='/purchase-success'
                        element={user ? <PurchaseSuccessPage /> : <Navigate to='/login' />}
                    />
                    <Route path='/purchase-cancel' element={user ? <PurchaseCancelPage /> : <Navigate to='/login' />} />
                </Routes>
            </div>
            <Toaster />
        </div>
    );
}

export default App;