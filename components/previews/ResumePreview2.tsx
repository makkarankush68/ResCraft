import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import { ResumeData } from '../../lib/types';

// Register font for enhanced styling
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const ResumePreview = ({ resumeData }: { resumeData: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>{resumeData?.personalInfo?.name}</Text>
          <Text style={styles.position}>{resumeData?.personalInfo?.summary}</Text>
          <Text style={styles.contact}>
            <Link style={styles.link} src={`mailto:${resumeData?.personalInfo?.email}`}>
              {resumeData?.personalInfo?.email}
            </Link>
            {' | '} {resumeData?.personalInfo?.phone} | {resumeData?.personalInfo?.location}
          </Text>
          <View style={styles.socialLinks}>
            <Link style={styles.link} src={resumeData?.personalInfo?.linkedin}>
              LinkedIn
            </Link>
            <Link style={styles.link} src={resumeData?.personalInfo?.github}>
              GitHub
            </Link>
            <Link style={styles.link} src={resumeData?.personalInfo?.twitter}>
              Twitter
            </Link>
            <Link style={styles.link} src={resumeData?.personalInfo?.portfolio}>
              Portfolio
            </Link>
          </View>
        </View>
      </View>

      {/* Profile Section */}
      {resumeData?.personalInfo?.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.info}>{resumeData?.personalInfo?.summary}</Text>
        </View>
      )}

      {/* Skills Section */}
      {resumeData?.skills && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {resumeData?.skills.technical.length > 0 && (
            <Text style={styles.listItem}>
              <Text style={styles.boldText}>Technical:</Text>{' '}
              {resumeData?.skills.technical.join(', ')}
            </Text>
          )}
          {resumeData?.skills.soft.length > 0 && (
            <Text style={styles.listItem}>
              <Text style={styles.boldText}>Soft Skills:</Text> {resumeData?.skills.soft.join(', ')}
            </Text>
          )}
          {resumeData?.skills.tools.length > 0 && (
            <Text style={styles.listItem}>
              <Text style={styles.boldText}>Tools:</Text> {resumeData?.skills.tools.join(', ')}
            </Text>
          )}
          {resumeData?.skills.other.length > 0 && (
            <Text style={styles.listItem}>
              <Text style={styles.boldText}>Other:</Text> {resumeData?.skills.other.join(', ')}
            </Text>
          )}
        </View>
      )}

      {/* Work Experience Section */}
      {resumeData?.workExperience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {resumeData?.workExperience.map((job, index) => (
            <View key={index} style={styles.jobContainer}>
              <Text>
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

      {/* Education Section */}
      {resumeData?.education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resumeData?.education.map((edu, index) => (
            <View key={index} style={styles.educationContainer}>
              <Text style={styles.boldText}>{edu?.degree}</Text>
              <Text style={styles.educationDetails}>
                {edu?.institution} | {edu?.startYear} - {edu?.endYear} | {edu?.marks}
              </Text>
            </View>
          ))}
        </View>
      )}
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
    backgroundColor: '#f0f8ff' // Light background for vibrancy
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20pt'
  },
  headerLeft: {
    flex: 1,
    marginRight: '20pt'
  },
  name: {
    fontSize: '28pt',
    fontWeight: 'bold',
    color: '#2c3e50' // Darker color for contrast
  },
  position: {
    fontSize: '14pt',
    marginBottom: '8pt',
    color: '#34495e' // Slightly lighter color for position
  },
  contact: {
    fontSize: '10pt',
    marginBottom: '8pt',
    color: '#7f8c8d' // Lighter color for contact details
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: '4pt'
  },
  section: {
    width: '100%',
    marginBottom: '20pt'
  },
  sectionTitle: {
    fontSize: '12pt',
    fontWeight: 'bold',
    marginBottom: '6pt',
    borderBottom: '2pt solid #2980b9', // Vibrant border color
    paddingBottom: '2pt',
    marginTop: '12pt',
    color: '#2980b9' // Vibrant section title color
  },
  jobContainer: {
    marginBottom: '12pt',
    backgroundColor: '#ecf0f1', // Light background for job entries
    padding: '10pt',
    borderRadius: '4pt'
  },
  projectContainer: {
    marginBottom: '12pt',
    backgroundColor: '#ecf0f1', // Light background for project entries
    padding: '10pt',
    borderRadius: '4pt'
  },
  listItem: {
    fontSize: '10pt',
    marginBottom: '6pt',
    textAlign: 'justify'
  },
  educationContainer: {
    marginBottom: '10pt'
  },
  educationDetails: {
    fontSize: '10pt',
    color: 'gray'
  },
  boldText: {
    fontWeight: 'bold',
    color: '#c0392b' // Vibrant color for emphasis
  },
  info: {
    fontSize: '10pt',
    marginBottom: '8pt',
    textAlign: 'justify',
    color: '#2c3e50' // Dark color for general info
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none',
    marginRight: '10pt'
  }
});

export default ResumePreview;
