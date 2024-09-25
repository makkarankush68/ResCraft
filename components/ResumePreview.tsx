import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import { ResumeData } from '@/lib/types';

const ResumePreview = ({ resumeData }: { resumeData: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData.personalInfo.name}</Text>
        <Text>
          <Link style={styles.contact} src={`mailto:${resumeData.personalInfo.email}`}>
            {resumeData.personalInfo.email}
          </Link>
          {' | '} {resumeData.personalInfo.phone} | {resumeData.personalInfo.location}
        </Text>
        <Text>
          <Link style={styles.contact} src={resumeData.personalInfo.github}>
            github/{resumeData.personalInfo.github.split('/').pop()}
          </Link>
          {' | '}
          <Link style={styles.contact} src={resumeData.personalInfo.linkedin}>
            linkedin/{resumeData.personalInfo.linkedin.split('/').pop()}
          </Link>
          {' | '}
          <Link style={styles.contact} src={resumeData.personalInfo.twitter}>
            twitter/{resumeData.personalInfo.twitter.split('/').pop()}
          </Link>
        </Text>
      </View>

      {/* Profile Section */}
      <View>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.info}>
            {resumeData.personalInfo.summary}
        </Text>
      </View>

      {/* Skills Section */}
      <View>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.listItem}>
          <Text style={{ fontWeight: 'bold' }}>Technical:</Text>{' '}
          {resumeData.skills.technical.join(', ')}
        </Text>
        <Text style={styles.listItem}>
          <Text style={{ fontWeight: 'bold' }}>Soft Skills:</Text>{' '}
          {resumeData.skills.soft.join(', ')}
        </Text>
        <Text style={styles.listItem}>
          <Text style={{ fontWeight: 'bold' }}>Tools:</Text> {resumeData.skills.tools.join(', ')}
        </Text>
        <Text style={styles.listItem}>
          <Text style={{ fontWeight: 'bold' }}>Other:</Text> {resumeData.skills.other.join(', ')}
        </Text>
      </View>

      {/* Experience Section */}
      <View>
        <Text style={styles.sectionTitle}>Experience</Text>
        {resumeData.workExperience.map((job, index) => (
          <View key={index}>
            <Text style={styles.subsectionTitle}>
              {job.company} ({job.startDate} - {job.endDate})
            </Text>
            <Text style={styles.listItem}>
              <Text style={{ fontWeight: 'bold' }}>
                {job.position} | {job.location}
              </Text>
            </Text>
            {job.description.map((desc, descIndex) => (
              <Text key={descIndex} style={styles.listItem}>
                • {desc}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Projects Section */}
      <View>
        <Text style={styles.sectionTitle}>Projects</Text>
        {resumeData.projects.map((project, index) => (
          <View key={index}>
            <Text style={styles.subsectionTitle}>{project.name}</Text>
            {project.description.map((desc, descIndex) => (
              <Text key={descIndex} style={styles.listItem}>
                • {desc}
              </Text>
            ))}
            <Text style={styles.listItem}>
              <Text style={{ fontWeight: 'bold' }}>Technologies used:</Text>{' '}
              {project.techUsed.join(', ')}
            </Text>
            <Text style={styles.listItem}>
              <Text style={{ fontWeight: 'bold' }}>Date:</Text> {project.date}
            </Text>
          </View>
        ))}
      </View>

      {/* Education Section */}
      <View>
        <Text style={styles.sectionTitle}>Education</Text>
        {resumeData.education.map((edu, index) => (
          <View key={index} style={styles.tableRow}>
            <Text>{edu.degree}</Text>
            <Text>
              {edu.startYear} - {edu.endYear}
            </Text>
            <Text>{edu.institution}</Text>
            <Text>{edu.marks}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
const styles = StyleSheet.create({
  page: {
    padding: '40pt',
    fontSize: '11pt',
    fontFamily: 'Times-Roman',
    lineHeight: 1.3
  },
  header: {
    textAlign: 'center',
    marginBottom: '20pt'
  },
  name: {
    fontSize: '24pt',
    fontWeight: 'bold'
  },
  contact: {
    fontSize: '10pt',
    color: 'blue',
    textDecoration: 'none'
  },
  sectionTitle: {
    fontSize: '12pt',
    fontWeight: 'bold',
    marginBottom: '6pt',
    borderBottom: '1pt solid black',
    paddingBottom: '2pt',
    marginTop: '12pt'
  },
  subsectionTitle: {
    fontSize: '11pt',
    fontWeight: 'bold',
    marginBottom: '4pt'
  },
  listItem: {
    fontSize: '10pt',
    marginBottom: '6pt',
    textAlign: 'justify'
  },
  fadedText: {
    color: 'gray'
  },
  info: {
    fontSize: '10pt',
    marginBottom: '8pt',
    textAlign: 'justify'
  },
  link: {
    color: 'blue',
    textDecoration: 'none'
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '10pt',
    marginBottom: '6pt'
  }
});

export default ResumePreview;
