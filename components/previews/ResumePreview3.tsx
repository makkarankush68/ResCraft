import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import { ResumeDataType } from '../../lib/types';

// Register font for enhanced styling
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const ResumePreview = ({ resumeData }: { resumeData: ResumeDataType }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Contact</Text>
          <Text style={styles.sidebarItem}>
            <Link style={styles.link} src={`mailto:${resumeData?.personalInfo?.email}`}>
              {resumeData?.personalInfo?.email}
            </Link>
          </Text>
          <Text style={styles.sidebarItem}>{resumeData?.personalInfo?.phone}</Text>
          <Text style={styles.sidebarItem}>{resumeData?.personalInfo?.location}</Text>

          <Text style={styles.sidebarTitle}>Social Links</Text>
          <Text style={styles.sidebarItem}>
            <Link style={styles.link} src={resumeData?.personalInfo?.linkedin}>
              LinkedIn
            </Link>
          </Text>
          <Text style={styles.sidebarItem}>
            <Link style={styles.link} src={resumeData?.personalInfo?.github}>
              GitHub
            </Link>
          </Text>
          <Text style={styles.sidebarItem}>
            <Link style={styles.link} src={resumeData?.personalInfo?.twitter}>
              Twitter
            </Link>
          </Text>
          <Text style={styles.sidebarItem}>
            <Link style={styles.link} src={resumeData?.personalInfo?.portfolio}>
              Portfolio
            </Link>
          </Text>

          <Text style={styles.sidebarTitle}>Skills</Text>
          {resumeData?.skills.technical?.length && (
            <Text style={styles.listItem}>
              <Text style={styles.boldText}>Technical:</Text>{' '}
              {resumeData?.skills.technical.join(', ')}
            </Text>
          )}
          {resumeData?.skills.soft?.length && (
            <Text style={styles.listItem}>
              <Text style={styles.boldText}>Soft Skills:</Text> {resumeData?.skills.soft.join(', ')}
            </Text>
          )}
          {resumeData?.skills.tools?.length && (
            <Text style={styles.listItem}>
              <Text style={styles.boldText}>Tools:</Text> {resumeData?.skills.tools.join(', ')}
            </Text>
          )}
          {resumeData?.skills.other?.length && (
            <Text style={styles.listItem}>
              <Text style={styles.boldText}>Other:</Text> {resumeData?.skills.other.join(', ')}
            </Text>
          )}

          <Text style={styles.sidebarTitle}>Education</Text>
          {resumeData?.education?.length > 0 &&
            resumeData?.education.map((edu, index) => (
              <View key={index} style={styles.educationContainer}>
                <Text style={styles.boldText}>{edu?.degree}</Text>
                <Text style={styles.educationDetails}>
                  {edu?.institution} | {edu?.startYear} - {edu?.endYear} | {edu?.marks}
                </Text>
              </View>
            ))}
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>{resumeData?.personalInfo?.name}</Text>
            <Text style={styles.position}>{resumeData?.personalInfo?.summary}</Text>
          </View>

          {/* Work Experience Section */}
          {resumeData?.workExperience?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              {resumeData?.workExperience.map((job, index) => (
                <View key={index} style={styles.jobContainer}>
                  <Text style={styles.listItem}>
                    {job?.company} ({job?.startDate} - {job?.endDate})
                  </Text>
                  <Text style={styles.listItem}>
                    <Text style={styles.boldText}>{job?.position}</Text>
                  </Text>
                  {job?.description?.length > 0 &&
                    job?.description.map((desc, descIndex) => (
                      <Text key={descIndex} style={styles.listItem}>
                        • {desc}
                      </Text>
                    ))}
                </View>
              ))}
            </View>
          )}

          {/* Projects Section */}
          {resumeData?.projects?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projects</Text>
              {resumeData?.projects.map((project, index) => (
                <View key={index} style={styles.projectContainer}>
                  <Text style={styles.boldText}>
                    {project?.name} ({project?.date})
                  </Text>
                  <Text style={styles.listItem}>{project?.description.join(' ')}</Text>
                  <Text style={styles.listItem}>
                    <Text style={styles.boldText}>Technologies Used:</Text>{' '}
                    {project?.techUsed.join(', ')}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </Page>
  </Document>
);

// Styles
const styles = StyleSheet.create({
  page: {
    padding: '40pt',
    fontSize: '11pt',
    fontFamily: 'Oswald',
    lineHeight: 1.3,
    backgroundColor: '#2c3e50' // Dark blue-grey background
  },
  container: {
    flexDirection: 'row'
  },
  sidebar: {
    width: '30%',
    padding: '20pt',
    backgroundColor: '#34495e', // Sidebar background color
    borderRadius: '5pt'
  },
  sidebarTitle: {
    fontSize: '12pt',
    fontWeight: 'bold',
    color: '#ecf0f1', // Sidebar title color
    marginBottom: '10pt'
  },
  sidebarItem: {
    fontSize: '10pt',
    marginBottom: '5pt',
    color: '#bdc3c7' // Sidebar item color
  },
  mainContent: {
    width: '70%',
    padding: '20pt',
    backgroundColor: '#2c3e50', // Main content background color
    borderRadius: '5pt',
    marginLeft: '20pt'
  },
  header: {
    marginBottom: '20pt'
  },
  name: {
    fontSize: '28pt',
    fontWeight: 'bold',
    color: '#ecf0f1' // Light color for name
  },
  position: {
    fontSize: '14pt',
    marginBottom: '8pt',
    color: '#bdc3c7' // Slightly lighter color for position
  },
  section: {
    width: '100%',
    marginBottom: '20pt'
  },
  sectionTitle: {
    fontSize: '12pt',
    fontWeight: 'bold',
    marginBottom: '6pt',
    borderBottom: '2pt solid #1abc9c', // Vibrant border color
    paddingBottom: '2pt',
    marginTop: '12pt',
    color: '#1abc9c' // Vibrant section title color
  },
  jobContainer: {
    marginBottom: '12pt',
    backgroundColor: '#34495e', // Darker background for job entries
    padding: '10pt',
    borderRadius: '4pt'
  },
  projectContainer: {
    marginBottom: '12pt',
    backgroundColor: '#34495e', // Darker background for project entries
    padding: '10pt',
    borderRadius: '4pt'
  },
  listItem: {
    fontSize: '10pt',
    marginBottom: '6pt',
    textAlign: 'justify',
    color: '#ecf0f1' // Light color for list items
  },
  educationContainer: {
    marginBottom: '10pt'
  },
  educationDetails: {
    fontSize: '10pt',
    color: '#bdc3c7' // Lighter color for education details
  },
  boldText: {
    fontWeight: 'bold',
    color: '#e74c3c' // Vibrant color for emphasis
  },
  link: {
    color: '#1abc9c',
    textDecoration: 'none',
    marginRight: '10pt'
  }
});

export default ResumePreview;
