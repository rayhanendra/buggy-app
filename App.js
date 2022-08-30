import StackNavigation from "./src/navigation/StackNavigation";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <StackNavigation />
    </PaperProvider>
  );
}
