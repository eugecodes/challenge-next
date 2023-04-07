import NotFound from "parts/NotFound";
import { useAuth } from "utils/hocs/AuthProvider";

const withAuth = (WrappedComponent) => {
  return React.forwardRef(function AuthComponent(props, ref) {
    const { isAuthenticated, error, ...rest } = useAuth();

    if (!isAuthenticated) {
      return (
        <NotFound
          title="You don't have permission to access this page!"
          subtitle="You've tried to request a page that requires you to be logged in. Log in to your account."
        />
      );
    }

    return (
      <WrappedComponent
        ref={ref}
        {...props}
        isAuthenticated={isAuthenticated}
        error={error}
        {...rest}
      />
    );
  });
};

export default withAuth;
