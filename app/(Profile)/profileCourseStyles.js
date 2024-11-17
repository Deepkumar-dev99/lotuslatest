import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    marginBottom: 25,
    marginLeft: 16,
    color: '#000000',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    marginHorizontal: 17,
  },
  tabText: {
    fontSize: 16,
    marginRight: 34,
    color: '#707070',
  },
  activeTab: {
    color: '#DA69AF',
  },
  divider: {
    height: 2,
    backgroundColor: '#E2DEDE',
    marginBottom: 24,
    marginHorizontal: 16,
  },
  courseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Change to flex-start to align items at the top
    borderColor: '#E2DEDE',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  courseImage: {
    borderRadius: 8,
    width: 106,
    height: 89,
  },
  courseDetails: {
    flex: 1, // Make course details take up remaining space
    marginLeft: 12, // Add margin to the left of course details
  },
  courseTitle: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000000',
  },
  courseCategory: {
    fontSize: 14,
    marginBottom: 15,
    color: '#000000',
  },
  progressBar: {
    backgroundColor: '#eee',
    height: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  progress: {
    backgroundColor: '#34CC99',
    height: '100%',
    borderRadius: 5,
  },
  // progressContainer: {
  //   alignItems: 'flex-end', // Align progress bar to the right
  //   marginTop: 'auto', // Push it to the bottom of the course details
  // },
  // progressBar: {
  //   width: 45,
  //   height: 35, // Increased height for better visibility
  //   justifyContent: 'center', // Center text vertically
  //   alignItems: 'center',
  //   borderRadius: 4,
  // },
  // progressText: {
  //   fontSize: 14,
  //   color: '#FFFFFF',
  // },
  bookmarkedCourse: {
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  courseBox: {
    marginBottom: 21,
    width: '100%',
    height: 150,
  },
  courseAuthor: {
    fontSize: 12,
    marginBottom: 5,
    color: '#181818',
  },
  courseDescription: {
    fontSize: 12,
    marginBottom: 11,
    color: '#707070',
  },
  tagContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  tag: {
    backgroundColor: '#34CC99',
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default styles;
