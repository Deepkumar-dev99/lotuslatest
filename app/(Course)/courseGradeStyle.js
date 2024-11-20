import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  introContainer: {
    backgroundColor: '#34CC99',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 10,
  },
  introText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginVertical: 10,
  },
  courseCategory: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  courseLesson: {
    fontSize: 16,
    color: '#fff',
  },
  progressDots: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  dot_active: {
    width: 35,
    height: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  dot: {
    width: 50,
    height: 5,
    backgroundColor: '#DFDFDF',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  badgeSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginRight:5,
  },
  badgeBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    maxWidth: '30%',
    marginRight:10
  },
  badgeText: {
    fontSize: 12,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:15,
    marginTop:10,
  },
  benefitsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft:30,
    marginRight:40,
  },
  benefitsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34CC99',
    marginBottom: 10,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  benefitText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#808080',
  },
  startButton: {
    backgroundColor: '#34CC99',
    paddingVertical: 14,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 14,
  },

});
export default styles
