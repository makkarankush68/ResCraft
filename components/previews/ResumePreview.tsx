import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import { ResumeDataType } from '@/lib/types';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const ResumePreview = ({ resumeData }: { resumeData: ResumeDataType }) => (
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
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12pt' }}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {resumeData?.workExperience.map((job, index) => (
            <View key={index}>
              <View
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Text style={styles.subsectionTitle}>
                  {job?.company} ({job?.startDate} - {job?.endDate})
                </Text>
                <Text style={styles.listItem}>
                  <Text style={{ fontWeight: 'bold' }}>
                    {job?.position} | {job?.location}
                  </Text>
                </Text>
              </View>
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
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12pt' }}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {resumeData?.projects.map((project, index) => (
            <View key={index}>
              <View
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Text style={styles.subsectionTitle}>
                  {project?.name} ({project?.date})
                </Text>
                <Text style={styles.listItem}>{project?.techUsed.join(', ')}</Text>
              </View>
              {project?.description?.length > 0 &&
                project?.description.map((desc, descIndex) => (
                  <Text key={descIndex} style={styles.listItem}>
                    • {desc}
                  </Text>
                ))}
            </View>
          ))}
        </View>
      )}

      {/* Education Section */}
      {resumeData?.education?.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>Education</Text>
          {resumeData?.education.map((edu, index) => (
            <View key={index} style={styles.educationRow}>
              <View style={styles.educationInstitution}>
                <Text style={styles.educationInstitution}>{edu?.institution}</Text>
                <Text style={styles.educationInstitution}>{edu?.degree}</Text>
              </View>
              <Text style={styles.educationDetails}>
                {edu?.startYear} - {edu?.endYear} | {edu?.marks}
              </Text>
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
  educationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '10pt',
    marginBottom: '6pt'
  },
  educationInstitution: {
    flex: 3,
    fontSize: '10pt',
    marginBottom: '12pt'
  },
  educationDetails: {
    flex: 2,
    textAlign: 'right',
    fontSize: '10pt'
  }
});

export default ResumePreview;
