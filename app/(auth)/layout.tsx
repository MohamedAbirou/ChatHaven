const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="h-full flex items-center justify-center" style={{background: `url('/discord-auth-bg.png'); !important`, backgroundAttachment: 'fixed', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {children}
    </div>
   );
}
 
export default AuthLayout;