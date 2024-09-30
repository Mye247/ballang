import React, { PropsWithChildren } from "react";
import TanstackQueryProvider from "./_provider/tanStackQueryProvider";
import AuthProvider from "./_provider/authProvider";

function Providerlayout({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </TanstackQueryProvider>
  );
}

export default Providerlayout;
