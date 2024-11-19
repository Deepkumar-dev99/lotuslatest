import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 16,
    marginBottom: 39,
  },
  logo: {
    width: 39,
    height: 27,
    marginRight: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  flexFill: {
    flex: 1,
    alignSelf: 'stretch',
  },
  iconWrapper: {
    width: 16,
    marginRight: 24,
  },
  iconSmall: {
    height: 13,
    marginBottom: 1,
  },
  iconTiny: {
    height: 4,
    marginHorizontal: 5,
  },
  pageTitle: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 29,
    marginLeft: 17,
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 15,
  },
  categoryBox: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 14,
    marginBottom: 8,
    marginRight: 8,
  },
  selectedCategory: {
    backgroundColor: '#E2F6FF',
    borderColor: '#E2DEDE',
    width: 57,
  },
  unselectedCategory: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2DEDE',
    width: 76,
  },
  categoryText: {
    fontSize: 14,
  },
  selectedCategoryText: {
    color: '#28779C',
  },
  unselectedCategoryText: {
    color: '#707070',
  },
  courseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: 221,
  },
  courseTitle: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 8,
  },
  courseCategory: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 15,
  },
  progressBadge: {
    width: 49,
    height: 29,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    alignSelf:'flex-end',
    borderRadius: 4,
    paddingVertical: 4,
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
export default styles;
