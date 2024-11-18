import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container_cource:{
    marginTop:16,
    marginBottom: 16,
  },
  container_shadow:{
    borderRadius: 1, // Adjust to match the shape of your gradient box
    overflow: 'hidden', // Ensures shadow doesn't spill outside the border radius
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow blur
    elevation: 5, // Shadow for Android
  },
  //course box Design
  coursePallete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  row4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
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
    height: 122,
    backgroundColor: '#BCE0FD',
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 21,
    marginTop: 8,
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
  courseTags: {
    flexDirection: 'row',
  },
  tag: {
    width: 56,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    borderRadius: 20,
    paddingVertical: 8,
    marginRight: 16,
  },
  tagText: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  searchcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginTop: 10,
    marginBottom: 5,
    marginLeft:15,
    marginRight:15,
    borderColor: '#68D391', // Border color
    borderWidth: 2, // Border width
    borderRadius: 8, 
  },
  searchicon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchinput: {
    flex: 1,
    fontSize: 16,
    color: '#333', 
  },
});
export default styles