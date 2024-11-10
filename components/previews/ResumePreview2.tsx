import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import { ResumeDataType } from '../../lib/types';

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
        <Text style={styles.contact}>
          <Link style={styles.link} src={`mailto:${resumeData?.personalInfo?.email}`}>
            {resumeData?.personalInfo?.email}
          </Link>
          {' • '} {resumeData?.personalInfo?.phone} {' • '} {resumeData?.personalInfo?.location}
        </Text>
        <View style={styles.socialLinks}>
          {resumeData?.personalInfo?.linkedin && (
            <Link style={styles.link} src={resumeData?.personalInfo?.linkedin}>
              LinkedIn
            </Link>
          )}
          {resumeData?.personalInfo?.github && (
            <Link style={styles.link} src={resumeData?.personalInfo?.github}>
              GitHub
            </Link>
          )}
          {resumeData?.personalInfo?.portfolio && (
            <Link style={styles.link} src={resumeData?.personalInfo?.portfolio}>
              Portfolio
            </Link>
          )}
        </View>
      </View>

      {/* Profile Summary */}
      {resumeData?.personalInfo?.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{resumeData?.personalInfo?.summary}</Text>
        </View>
      )}

      {/* Skills Section */}
      {resumeData?.skills && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsGrid}>
            {resumeData?.skills.technical?.length && (
              <View style={styles.skillCategory}>
                <Text style={styles.skillItem}>
                  <Text style={styles.boldText}>Technical:</Text>{' '}
                  {resumeData?.skills.technical.join(' • ')}
                </Text>
              </View>
            )}
            {resumeData?.skills.tools?.length && (
              <View style={styles.skillCategory}>
                <Text style={styles.skillItem}>
                  <Text style={styles.boldText}>Tools:</Text> {resumeData?.skills.tools.join(' • ')}
                </Text>
              </View>
            )}
            {resumeData?.skills.soft?.length && (
              <View style={styles.skillCategory}>
                <Text style={styles.skillItem}>
                  <Text style={styles.boldText}>Soft Skills:</Text>{' '}
                  {resumeData?.skills.soft.join(' • ')}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}

      {/* Work Experience Section */}
      {resumeData?.workExperience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {resumeData?.workExperience.map((job, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.boldText}>{job?.position}</Text>
                <Text style={styles.dateText}>
                  {job?.startDate} - {job?.endDate}
                </Text>
              </View>
              <Text style={styles.companyText}>{job?.company}</Text>
              {job?.description?.length > 0 && (
                <View style={styles.bulletPoints}>
                  {job?.description.map((desc, descIndex) => (
                    <Text key={descIndex} style={styles.bulletPoint}>
                      • {desc}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Projects Section */}
      {resumeData?.projects?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notable Projects</Text>
          {resumeData?.projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.boldText}>{project?.name}</Text>
                <Text style={styles.dateText}>{project?.date}</Text>
              </View>
              <Text style={styles.projectDescription}>{project?.description.join(' ')}</Text>
              <Text style={styles.techStack}>
                <Text style={styles.boldText}>Technologies:</Text> {project?.techUsed.join(' • ')}
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
            <View key={index} style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <Text style={styles.boldText}>{edu?.degree}</Text>
                <Text style={styles.dateText}>
                  {edu?.startYear} - {edu?.endYear}
                </Text>
              </View>
              <Text style={styles.institutionText}>
                {edu?.institution} {edu?.marks && `| ${edu?.marks}`}
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
    padding: '30pt',
    fontSize: '10pt',
    fontFamily: 'Oswald',
    lineHeight: 1.4,
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: '16pt',
    borderBottom: '1pt solid #e0e0e0',
    paddingBottom: '12pt'
  },
  name: {
    fontSize: '22pt',
    fontWeight: 'bold',
    marginBottom: '6pt',
    color: '#1a237e'
  },
  contact: {
    fontSize: '10pt',
    marginBottom: '6pt',
    color: '#424242'
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: '4pt'
  },
  section: {
    // marginBottom: '16pt'
  },
  sectionTitle: {
    fontSize: '13pt',
    fontWeight: 'bold',
    marginBottom: '8pt',
    color: '#1a237e',
    borderBottom: '1.5pt solid #1a237e',
    // paddingBottom: '4pt'
  },
  summaryText: {
    fontSize: '10pt',
    textAlign: 'justify',
    marginBottom: '8pt',
    color: '#424242'
  },
  skillsGrid: {
    gap: '6pt'
  },
  skillCategory: {
    marginBottom: '6pt'
  },
  skillItem: {
    fontSize: '10pt',
    color: '#424242'
  },
  experienceItem: {
    marginBottom: '12pt',
    paddingBottom: '8pt',
    borderBottom: '0.5pt solid #e0e0e0'
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4pt'
  },
  companyText: {
    fontSize: '10pt',
    marginBottom: '4pt',
    color: '#616161',
    fontWeight: 'bold'
  },
  bulletPoints: {
    marginLeft: '12pt',
    marginTop: '4pt'
  },
  bulletPoint: {
    fontSize: '10pt',
    marginBottom: '3pt',
    color: '#424242'
  },
  projectItem: {
    marginBottom: '12pt',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4pt'
  },
  projectDescription: {
    fontSize: '10pt',
    marginBottom: '4pt',
    color: '#424242'
  },
  techStack: {
    fontSize: '10pt',
    marginTop: '4pt',
    color: '#616161'
  },
  educationItem: {
    marginBottom: '10pt'
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4pt'
  },
  institutionText: {
    fontSize: '10pt',
    color: '#616161'
  },
  dateText: {
    fontSize: '9pt',
    color: '#757575'
  },
  boldText: {
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  link: {
    color: '#1565c0',
    textDecoration: 'none',
    marginRight: '10pt'
  }
});

export default ResumePreview;
