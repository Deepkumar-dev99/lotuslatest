import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import getNotificationsByUserId from "../../BackendProxy/notificationProxy/getNotificationsByUserId";
import markNotificationAsRead from "../../BackendProxy/notificationProxy/markNotificationAsRead";
import { Header } from "../(tabs)/header";
import { Footer } from "../(tabs)/footer";

const Notification = () => {
  const authUser = useSelector((state) => state.user);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const userId = authUser?.id; // Replace with actual user ID
        if (userId) {
          const data = await getNotificationsByUserId(userId);
          setNotifications(data);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotifications();
  }, [authUser]);

  const handleMarkAsRead = async (notificationId) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === notificationId ? { ...n, read: true } : n
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header />
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Text style={styles.title}>Notifications</Text>
        {loading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : notifications.length === 0 ? (
          <Text style={styles.noNotifications}>No notifications available</Text>
        ) : (
          notifications.map((notification) => (
            <View style={styles.notification} key={notification.id}>
              <View style={styles.statusDot}>
                <View
                  style={{
                    ...styles.dot,
                    backgroundColor: notification.read
                      ? "#CCCCCC"
                      : "#34CC99",
                  }}
                />
              </View>
              <Text style={styles.notificationText}>
                {notification.message}
              </Text>
              <TouchableOpacity
                onPress={() => handleMarkAsRead(notification.id)}
                style={styles.markAsReadButton}
              >
                <Text style={styles.buttonText}>
                  {notification.read ? "Read" : "Mark as Read"}
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#000000",
    fontSize: 24,
    marginBottom: 35,
    marginLeft: 17,
  },
  loading: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  noNotifications: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginHorizontal: 15,
  },
  statusDot: {
    marginRight: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
  },
  notificationText: {
    color: "#000000",
    fontSize: 14,
    flex: 1,
  },
  markAsReadButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});

export default Notification;
