import { useRouter } from 'expo-router'; // Import useRouter for redirection
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '../../context/GlobalProvider';
import GlobalProvider from '../../context/GlobalProvider';
import { View } from 'react-native';
import { Stack } from 'expo-router'; // Ensure this is correctly imported
import { Provider } from 'react-redux';
import { store } from '../../redux/store'; // Import your Redux store

const CourseLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/popularCourse" />;

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <GlobalProvider>
          <Stack>
            <Stack.Screen
              name="popularCourse"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="allCourses"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="lessonContent"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="courseGrade"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </GlobalProvider>
      </View>
    </Provider>
  );
};

export default CourseLayout;
