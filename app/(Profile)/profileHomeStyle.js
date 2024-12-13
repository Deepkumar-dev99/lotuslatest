import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 35,
  },
  column3: {
    width: 93,
    marginRight: 29,
  },
  column4: {
    flex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    width: 99,
    height: 99,
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginRight: 30,
  },
  image6: {
    height: 40,
    marginBottom: 4,
    marginHorizontal: 8,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#5E27FD',
    borderWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 23,
    marginBottom: 16,
  },
  row4: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  userName: {
    color: '#181818',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text3: {
    color: '#181818',
    fontSize: 10,
    width: 93,
  },
  text4: {
    color: '#181818',
    fontSize: 12,
  },
  subjectImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  subjectText: {
    color: '#272727',
    fontSize: 12,
    textAlign: 'center',
  },
  commonColumn: {
    width: 114,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingBottom: 15,
  },
  commonBox: {
    height: 76,
    marginBottom: 15,
    width: 100, // Adjust as needed
    height: 76, // Adjust as needed
    resizeMode: 'contain', // Adjust based on your image content
  },
  boxWithBackground: {
    backgroundColor: '#BCE0FD',
  },
  badge: {
    padding: 8,
    borderRadius: 20,
    flexDirection: 'column', // Ensure items stack vertically
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center',
  },
  badgeText: {
    marginRight: 8,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  coursesSection: {
    paddingLeft: 16,
  },
  coursesTitle: {
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noCoursesText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});
export default styles