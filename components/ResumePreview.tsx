import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import { ResumeData } from '@/lib/types';
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const ResumePreview = ({ resumeData }: { resumeData: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData?.personalInfo?.name}</Text>
        <Text>
          <Link style={styles.contact} src={`mailto:${resumeData?.personalInfo?.email}`}>
            {resumeData?.personalInfo?.email}
          </Link>
          {' | '} {resumeData?.personalInfo?.phone} | {resumeData?.personalInfo?.location}
        </Text>
        <Text>
          {resumeData?.personalInfo?.github && (
            <>
              <Link style={styles.contact} src={resumeData?.personalInfo?.github}>
                github/{resumeData?.personalInfo?.github.split('/').pop()}
              </Link>{' '}
              {' | '}
            </>
          )}
          {resumeData?.personalInfo?.linkedin && (
            <>
              <Link style={styles.contact} src={resumeData?.personalInfo?.linkedin}>
                linkedin/{resumeData?.personalInfo?.linkedin.split('/').pop()}
              </Link>{' '}
              {' | '}
            </>
          )}
          {resumeData?.personalInfo?.twitter && (
            <Link style={styles.contact} src={resumeData?.personalInfo?.twitter}>
              twitter/{resumeData?.personalInfo?.twitter.split('/').pop()}
            </Link>
          )}
        </Text>
      </View>

      {/* Profile Section */}
      {resumeData?.personalInfo?.summary && (
        <View>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.info}>{resumeData?.personalInfo?.summary}</Text>
        </View>
      )}

      {/* Skills Section */}
      {(resumeData?.skills?.technical?.length > 0 ||
        resumeData?.skills?.soft?.length > 0 ||
        resumeData?.skills?.tools?.length > 0 ||
        resumeData?.skills?.other?.length > 0) && (
        <View>
          <Text style={styles.sectionTitle}>Skills</Text>
          {resumeData?.skills?.technical?.length > 0 && (
            <Text style={styles.listItem}>
              <Text style={{ fontWeight: 'bold' }}>Technical:</Text>{' '}
              {resumeData?.skills?.technical.join(', ')}
            </Text>
          )}
          {resumeData?.skills?.soft?.length > 0 && (
            <Text style={styles.listItem}>
              <Text style={{ fontWeight: 'bold' }}>Soft Skills:</Text>{' '}
              {resumeData?.skills?.soft.join(', ')}
            </Text>
          )}
          {resumeData?.skills?.tools?.length > 0 && (
            <Text style={styles.listItem}>
              <Text style={{ fontWeight: 'bold' }}>Tools:</Text>{' '}
              {resumeData?.skills?.tools.join(', ')}
            </Text>
          )}
          {resumeData?.skills?.other?.length > 0 && (
            <Text style={styles.listItem}>
              <Text style={{ fontWeight: 'bold' }}>Other:</Text>{' '}
              {resumeData?.skills?.other.join(', ')}
            </Text>
          )}
        </View>
      )}

      {/* Experience Section */}
      {resumeData?.workExperience?.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>Experience</Text>
          {resumeData?.workExperience.map((job, index) => (
            <View key={index}>
              <Text style={styles.subsectionTitle}>
                {job?.company} ({job?.startDate} - {job?.endDate})
              </Text>
              <Text style={styles.listItem}>
                <Text style={{ fontWeight: 'bold' }}>
                  {job?.position} | {job?.location}
                </Text>
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
        <View>
          <Text style={styles.sectionTitle}>Projects</Text>
          {resumeData?.projects.map((project, index) => (
            <View key={index}>
              <Text style={styles.subsectionTitle}>{project?.name}</Text>
              {project?.description?.length > 0 &&
                project?.description.map((desc, descIndex) => (
                  <Text key={descIndex} style={styles.listItem}>
                    • {desc}
                  </Text>
                ))}
              <Text style={styles.listItem}>
                <Text style={{ fontWeight: 'bold' }}>Technologies used:</Text>{' '}
                {project?.techUsed.join(', ')}
              </Text>
              <Text style={styles.listItem}>
                <Text style={{ fontWeight: 'bold' }}>Date:</Text> {project?.date}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Education Section */}
      {resumeData?.education?.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>Education</Text>
          {resumeData?.education.map((edu, index) => (
            <View key={index} style={styles.tableRow}>
              <Text>{edu?.degree}</Text>
              <Text>
                {edu?.startYear} - {edu?.endYear}
              </Text>
              <Text>{edu?.institution}</Text>
              <Text>{edu?.marks}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

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
const modernStyles = StyleSheet.create({
  page: {
    padding: '30pt',
    fontSize: '12pt',
    fontFamily: 'Arial',
    lineHeight: 1.5,
    backgroundColor: '#f5f5f5',
  },
  header: {
    textAlign: 'left',
    marginBottom: '30pt',
  },
  name: {
    fontSize: '26pt',
    fontWeight: '700',
    color: '#333',
  },
  contact: {
    fontSize: '11pt',
    color: '#000',
    textDecoration: 'underline',
  },
  sectionTitle: {
    fontSize: '14pt',
    fontWeight: '600',
    marginBottom: '8pt',
    borderBottom: '2pt solid #333',
    paddingBottom: '4pt',
    marginTop: '16pt',
    color: '#333',
  },
  subsectionTitle: {
    fontSize: '12pt',
    fontWeight: '600',
    marginBottom: '5pt',
  },
  listItem: {
    fontSize: '11pt',
    marginBottom: '8pt',
    textAlign: 'left',
    color: '#555',
  },
  fadedText: {
    color: '#888',
  },
  info: {
    fontSize: '11pt',
    marginBottom: '10pt',
    textAlign: 'left',
    color: '#333',
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'underline',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '11pt',
    marginBottom: '8pt',
  },
});
const vibrantStyles = StyleSheet.create({
  page: {
    padding: '50pt',
    fontSize: '13pt',
    fontFamily: 'Helvetica',
    lineHeight: 1.6,
    backgroundColor: '#ffffff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40pt',
    color: '#ff6f61',
  },
  name: {
    fontSize: '30pt',
    fontWeight: '900',
    color: '#ff6f61',
  },
  contact: {
    fontSize: '12pt',
    color: '#3b5998',
    textDecoration: 'none',
  },
  sectionTitle: {
    fontSize: '16pt',
    fontWeight: '700',
    marginBottom: '10pt',
    borderBottom: '2pt solid #ff6f61',
    paddingBottom: '5pt',
    marginTop: '20pt',
    color: '#ff6f61',
  },
  subsectionTitle: {
    fontSize: '13pt',
    fontWeight: '700',
    marginBottom: '6pt',
  },
  listItem: {
    fontSize: '12pt',
    marginBottom: '10pt',
    textAlign: 'justify',
    color: '#333',
  },
  fadedText: {
    color: '#b0b0b0',
  },
  info: {
    fontSize: '12pt',
    marginBottom: '10pt',
    textAlign: 'justify',
    color: '#333',
  },
  link: {
    color: '#e91e63',
    textDecoration: 'none',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '12pt',
    marginBottom: '10pt',
  },
});
const classicStyles = StyleSheet.create({
  page: {
    padding: '40pt',
    fontSize: '11pt',
    fontFamily: 'Georgia',
    lineHeight: 1.4,
  },
  header: {
    textAlign: 'center',
    marginBottom: '20pt',
    fontFamily: 'Georgia',
  },
  name: {
    fontSize: '24pt',
    fontWeight: 'bold',
    color: '#333',
  },
  contact: {
    fontSize: '10pt',
    color: '#000080',
    textDecoration: 'none',
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: '12pt',
    fontWeight: 'bold',
    marginBottom: '6pt',
    borderBottom: '1pt solid black',
    paddingBottom: '2pt',
    marginTop: '12pt',
    color: '#000080',
  },
  subsectionTitle: {
    fontSize: '11pt',
    fontWeight: 'bold',
    marginBottom: '4pt',
    color: '#333',
  },
  listItem: {
    fontSize: '10pt',
    marginBottom: '6pt',
    textAlign: 'justify',
    color: '#444',
  },
  fadedText: {
    color: 'gray',
  },
  info: {
    fontSize: '10pt',
    marginBottom: '8pt',
    textAlign: 'justify',
    color: '#444',
  },
  link: {
    color: '#000080',
    textDecoration: 'none',
    fontStyle: 'italic',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '10pt',
    marginBottom: '6pt',
  },
});


export default ResumePreview;
