import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Eye, EyeOff, X, Chrome, Github } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
}

const AuthModal = ({ open, onClose, mode: initialMode }: AuthModalProps) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast.success("Account created successfully! Please check your email.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success("Welcome back!");
      }

      onClose();
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast.error(error.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || "Google sign in failed");
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || "GitHub sign in failed");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-0 bg-slate-800/95 backdrop-blur-xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-gray-400">
                {mode === 'signin'
                  ? 'Sign in to continue your journey'
                  : 'Join thousands of travelers worldwide'}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <Button
                type="button"
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full h-12 bg-white hover:bg-gray-50 text-gray-900 border-0 font-medium"
              >
                <Chrome className="h-5 w-5 mr-3 text-blue-600" />
                Google
              </Button>

              <Button
                type="button"
                onClick={handleGithubSignIn}
                variant="outline"
                className="w-full h-12 bg-white hover:bg-gray-50 text-gray-900 border-0 font-medium"
              >
                <Github className="h-5 w-5 mr-3" />
                GitHub
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-slate-800 px-3 text-gray-400">or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {mode === 'signin' && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      className="border-gray-600 data-[state=checked]:bg-blue-600"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm text-gray-400 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-medium"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Processing...
                  </span>
                ) : (
                  <>
                    Sign {mode === 'signin' ? 'In' : 'Up'}
                    <span className="ml-2">→</span>
                  </>
                )}
              </Button>

              <div className="text-center">
                <span className="text-gray-400 text-sm">
                  {mode === 'signin'
                    ? "Don't have an account? "
                    : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  {mode === 'signin' ? 'Sign up' : 'Sign in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
