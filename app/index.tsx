import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { toggleDarkMode, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.Background }]}>
      <Text style={[styles.text, { color: colors.Text_Primary }]}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});
