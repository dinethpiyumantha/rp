import { StyleSheet, View } from 'react-native';
import Notification from '../components/cards/Notification';
import VRNotification from '../components/cards/VRNotification';
import TitleBar from '../components/title/TitleBar';

export default function AllNotifications() {
  return (
    <View style={styles.container}>
      <TitleBar title={"All Notifications"} />
      <VRNotification />
      <Notification description={"Your body measurements sent successfully to @sandaniyasaswee"} time={"2 Days Ago"} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});