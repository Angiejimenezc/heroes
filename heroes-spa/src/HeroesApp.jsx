import { AppRotuer } from './router/AppRotuer';
import { AuthProvider } from './auth';


export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRotuer />
    </AuthProvider>
  );
}

