import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 35,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  courseDetails: {
    position: 'absolute',
    bottom: -50,
    left: 20,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
  },
  profileImage: {
    position: 'absolute',
    right: 20,
    bottom: -35,
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: '#fff',
  },

  descriptionContainer: {
    padding: 20,
  },
  courseLongDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 50,
    marginBottom: 20,
  },
  moduleContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#82c91e',
    borderRadius: 5,
    height: 50,
  },
  locked: {
    backgroundColor: '#d3d3d3',
  },
  module: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  courseImage: {
    width: 60,
    height: 50,
    borderRadius: 5,
  },
  moduleTime: {
    fontSize: 12,
    color: '#fff',
  },
  column: {
    width: 150,
    textAlign: 'left',
  },
  lock: {
    alignContent: 'center',
  },
});
export default styles
