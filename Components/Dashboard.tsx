import { FlatList, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

function Dashboard() {
  const projectsData = [
    {
      id: 1,
      title: 'Invoice for Customers',
      category: 'Development',
      projectSrc: require('../assets/paypal.png'),
      imgSrc: require('../assets/profile-pic1.png'),
      notifications: 9,
    },
    {
      id: 2,
      title: 'Dribbble Website Mockup',
      category: 'Development',
      projectSrc: require('../assets/dribble.png'),
      imgSrc: require('../assets/profile-pic2.png'),
      notifications: 3,
    },
    {
      id: 3,
      title: 'Envato App Design',
      category: 'Development',
      projectSrc: require('../assets/envanto.png'),
      imgSrc: require('../assets/profile-pic3.png'),
      notifications: 4,
    },
    {
      id: 4,
      title: 'Dropbox Development',
      category: 'Development',
      projectSrc: require('../assets/dropbox.png'),
      imgSrc: require('../assets/profile-pic4.png'),
      notifications: 7,
    },
    {
      id: 5,
      title: 'Sketch App Template',
      category: 'Development',
      projectSrc: require('../assets/sketch.png'),
      imgSrc: require('../assets/profile-pic5.png'),
      notifications: 6,
    },
    {
      id: 6,
      title: 'Dribbble Presentation',
      category: 'Development',
      projectSrc: require('../assets/dribble.png'),
      imgSrc: require('../assets/profile-pic6.png'),
      notifications: 3,
    },
    {
      id: 7,
      title: 'Shopify New Website',
      category: 'Development',
      projectSrc: require('../assets/shopify.png'),
      imgSrc: require('../assets/profile-pic7.png'),
      notifications: 9,
    },
    {
      id: 8,
      title: 'Slack Group Resources',
      category: 'Development',
      projectSrc: require('../assets/slack.png'),
      imgSrc: require('../assets/profile-pic8.png'),
      notifications: 2,
    },

  ];

  const ProjectsCard = ({ project }: any) => {
    return (
      <View style={styles.firstCard}>
        <View style={styles.projectImgStyle}>
          <Image
            source={project.projectSrc}
            style={styles.ProjectInsideImgStyle}
          />
        </View>
        <View style={styles.textCard}>
          <Text style={styles.textStyle}>{project.title}</Text>
          <Text style={styles.secondtextStyle}>{project.category}</Text>
        </View>
        <View style={styles.insideCard}>
          <Image source={project.imgSrc} style={styles.PorfilePic} />
          <Text style={styles.notificationtextStyle}>
            +{project.notifications}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image source={require('../assets/add.png')} style={styles.addIcon} />
        <Text style={styles.topRowText}>All Projects</Text>
        <Image
          source={require('../assets/profile-pic1.png')}
          style={styles.PorfilePic}
        ></Image>
      </View>
      <FlatList
        data={projectsData}
        renderItem={({ item }) => <ProjectsCard project={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B9A4FF',
    paddingTop: 50,
    flex: 1,
  },
  firstCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textStyle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
  },
  topRow: {
    flexDirection: 'row',
    padding: 20,
    alignContent: 'center',
  },
  addIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  topRowText: {
    fontSize: 26,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  PorfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  textCard: {
    flexDirection: 'column',
    flex: 2
  },
  secondtextStyle: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: 'medium',
  },
  insideCard: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  notificationtextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 35,
    height: 35,
    marginLeft: 5,
    borderRadius: 20,
    backgroundColor: '#cbc9c9ff',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  projectImgStyle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#e0ddddff',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProjectInsideImgStyle: {
    width: 25,
    height: 25,
  },
});
export default Dashboard;
