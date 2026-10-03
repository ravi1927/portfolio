import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Container, Typography, Button, IconButton, Stack, Chip,
  Card, CardContent, Grid, Divider, Drawer, List, ListItemButton, ListItemText,
  Tooltip
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const nav = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
const skills = [
  { name: 'React.js', group: 'Frontend' }, { name: 'React Native', group: 'Mobile' }, { name: 'JavaScript ES6+', group: 'Frontend' },
  { name: 'HTML5 & CSS3', group: 'Frontend' }, { name: 'Bootstrap', group: 'Frontend' }, { name: 'AngularJS', group: 'Frontend' },
  { name: 'PHP', group: 'Backend' }, { name: 'CodeIgniter', group: 'Backend' }, { name: 'MySQL', group: 'Database' },
  { name: 'REST API integration', group: 'Development' }, { name: 'Git & GitHub', group: 'Tools' }, { name: 'Responsive UI', group: 'Development' }
];
const experience = [
  { company: 'Aptiway Technologies', role: 'Software Developer', period: 'Feb 2022 — Present', projects: [
    { name: 'Wakati · Web & mobile platform', detail: 'Multi-role platform with Admin, Adjudicator, CFO, Merchant, and EXIM Bank logins. Worked on React Native customer and business apps alongside the web application.', bullets: ['Merchant and user administration, merchant categories, configurable dropdowns, role-based access, and filtered data tables.', 'Admin/CFO reporting with filters, Excel/PDF exports, activity reporting, and visual summaries.', 'Merchant QR generation, event and organizer management, and refund workflows.'] },
    { name: 'Bank of Baroda (BOB) · Web application', detail: 'Role-based web application with Admin and Adjudicator logins, following workflows similar to Wakati.', bullets: ['Contributed to user/data management and adjudicator approval workflows.', 'Worked on reporting and data export capabilities.'] }
  ]},
  { company: 'Spondias India Pvt Ltd', role: 'Software Developer', period: 'Jan 2020 — Jan 2022', projects: [
    { name: 'DVLA · React Native mobile apps', detail: 'Developed mobile applications for police users and customers for driver and vehicle management.', bullets: ['Built workflows for both police and customer applications.', 'Implemented QR-code scanning functionality.'] }
  ]},
  { company: 'Zonup Technologies', role: 'Software Developer', period: 'Jan 2018 — Jan 2020', projects: [
    { name: 'Web application development', detail: 'Built responsive web applications using HTML, CSS, JavaScript, and PHP.', bullets: ['Maintained backend services and application data workflows using CodeIgniter and MySQL.'] }
  ]}
];
const projects = [
  { title: 'Wakati', type: 'Web platform + React Native', icon: <DashboardRoundedIcon />, tags: ['React.js', 'React Native', 'Role-based workflows'], desc: 'Merchant, events, and refund management platform with distinct user roles, reporting, exports, QR generation, and customer/business mobile apps.' },
  { title: 'Bank of Baroda (BOB)', type: 'Web application', icon: <AccountTreeRoundedIcon />, tags: ['Admin', 'Adjudicator', 'Approvals'], desc: 'Role-based web application with Admin and Adjudicator access, approval workflows, reporting, and data export.' },
  { title: 'DVLA', type: 'React Native · Police & customer apps', icon: <SmartphoneRoundedIcon />, tags: ['React Native', 'QR scanning', 'Mobile'], desc: 'Mobile applications for police users and customers supporting driver and vehicle management workflows and QR-code scanning.' },
  { title: 'Bank of Abyssinia', type: 'Customer enrollment system', icon: <AccountTreeRoundedIcon />, tags: ['Enrollment', 'Records', 'Approval'], desc: 'Customer enrollment and bank-account creation workflows, customer record management, data export, and Adjudicator review/approval.' },
  { title: 'CNAM Dashboard', type: 'Role-based dashboard', icon: <DashboardRoundedIcon />, tags: ['Admin', 'Adjudicator', 'Reports'], desc: 'Dashboard with Admin and Adjudicator logins and workflows similar to the BOB application.' },
  { title: 'SkillPundit', type: 'Online learning platform', icon: <CodeRoundedIcon />, tags: ['React.js', 'PHP', 'Learning'], desc: 'Learning modules and online tests for programming languages, built with React.js and PHP.' },
  { title: 'ProxyRam', type: 'Company compliance system', icon: <DashboardRoundedIcon />, tags: ['CodeIgniter', 'MySQL', 'Dashboard'], desc: 'Dashboard and notification functionality for a company compliance system.' }
];
const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .55 } } };

function SectionTitle({ eyebrow, title, subtitle }) {
  return <Box sx={{ mb: 4 }}><Typography className="eyebrow">{eyebrow}</Typography><Typography variant="h2" className="section-title">{title}</Typography>{subtitle && <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 680 }}>{subtitle}</Typography>}</Box>;
}
function Header() {
  const [open, setOpen] = useState(false);
  const go = id => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <AppBar position="fixed" elevation={0} className="nav-bar"><Container maxWidth="lg"><Toolbar disableGutters sx={{ minHeight: '72px !important', justifyContent: 'space-between' }}>
    <Typography className="brand" onClick={() => go('About')}>RB<span>.</span></Typography>
    <Stack direction="row" spacing={3} className="desktop-nav">{nav.map(n => <Typography key={n} onClick={() => go(n)} className="nav-link">{n}</Typography>)}</Stack>
    <Button className="nav-cta" variant="outlined" onClick={() => go('Contact')}>Let’s talk <ArrowOutwardRoundedIcon fontSize="small" /></Button>
    <IconButton className="mobile-menu" onClick={() => setOpen(true)} aria-label="Open navigation"><MenuRoundedIcon /></IconButton>
  </Toolbar></Container>
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { bgcolor: '#11182b', color: 'white', width: 260, p: 2 } }}>
      <List>{nav.map(n => <ListItemButton key={n} onClick={() => go(n)}><ListItemText primary={n} /></ListItemButton>)}</List>
    </Drawer>
  </AppBar>;
}
function App() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'Dashboard'];
  const visibleProjects = projects.filter(p => filter === 'All' || (filter === 'Mobile' && p.type.toLowerCase().includes('react native')) || (filter === 'Dashboard' && p.title.toLowerCase().includes('dashboard')) || (filter === 'Web' && !p.type.toLowerCase().includes('react native')));
  return <><Header />
    <Box component="main">
      <Box id="about" className="hero"><div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} md={7}>
              <MotionBox initial="hidden" animate="visible" variants={fade}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}><span className="status-dot"/><Typography className="eyebrow">AVAILABLE FOR FRONTEND OPPORTUNITIES</Typography></Stack>
                <Typography className="hero-kicker">Hello, I’m</Typography>
                <Typography variant="h1" className="hero-name">Ravichandra<br/><span>Bodduri.</span></Typography>
                <Typography className="hero-role">Senior Frontend Developer <span>·</span> React.js & React Native</Typography>
                <Typography color="text.secondary" className="hero-copy">I build responsive web and mobile experiences, role-based applications, and data-rich dashboards with a focus on usability and maintainable interfaces.</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
                  <Button variant="contained" endIcon={<ArrowOutwardRoundedIcon />} onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Explore my work</Button>
                  <Button variant="outlined" startIcon={<MailOutlineRoundedIcon />} href="mailto:ravi1993272@gmail.com">Contact me</Button>
                </Stack>
                <Stack direction="row" spacing={1.2} sx={{ mt: 3 }}>
                  <Tooltip title="GitHub"><IconButton className="social-btn" component="a" href="https://github.com/ravi1927" target="_blank" rel="noreferrer"><GitHubIcon /></IconButton></Tooltip>
                  <Tooltip title="LinkedIn"><IconButton className="social-btn" component="a" href="https://www.linkedin.com/in/bodduri-ravichandra-7aa030110" target="_blank" rel="noreferrer"><LinkedInIcon /></IconButton></Tooltip>
                </Stack>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={5}>
              <MotionBox className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}>
                <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
                <div className="code-card">
                  <div className="code-top"><i/><i/><i/><span>developer.js</span></div>
                  <div className="code-lines"><p><b>const</b> developer = {'{'}</p><p className="indent"><em>name</em>: <strong>'Ravichandra'</strong>,</p><p className="indent"><em>focus</em>: [</p><p className="indent2"><strong>'React.js'</strong>,</p><p className="indent2"><strong>'React Native'</strong></p><p className="indent">],</p><p className="indent"><em>experience</em>: <strong>'8 years'</strong></p><p>{'}'};</p><p className="code-comment">// turning ideas into interfaces</p></div>
                </div>
                <div className="float-chip chip-react"><span>⚛</span> React.js</div><div className="float-chip chip-mobile"><SmartphoneRoundedIcon/> React Native</div>
              </MotionBox>
            </Grid>
          </Grid>
          <Box className="hero-bottom"><Typography color="text.secondary" variant="caption">SCROLL TO DISCOVER</Typography><KeyboardArrowDownRoundedIcon className="bounce"/></Box>
        </Container>
      </Box>

      <Container maxWidth="lg" className="content-section">
        <Box className="stats-strip">
          {[['8+', 'Years of experience'],['3', 'Organizations'],['Web + Mobile', 'Product experience']].map(([v,l]) => <Box key={l} className="stat"><Typography>{v}</Typography><span>{l}</span></Box>)}
        </Box>
        <Box component="section" id="skills" sx={{ pt: 10 }}>
          <SectionTitle eyebrow="WHAT I WORK WITH" title="Skills & toolkit" subtitle="A practical toolkit for building interfaces across web and mobile, integrating services, and presenting complex information clearly."/>
          <Grid container spacing={1.3}>{skills.map((s,i)=><Grid item key={s.name}><MotionBox whileHover={{ y: -3 }} transition={{ duration: .18 }}><Chip className="skill-chip" label={<><span className="skill-dot"/>{s.name}</>} /></MotionBox></Grid>)}</Grid>
        </Box>
        <Box component="section" id="experience" sx={{ pt: 11 }}>
          <SectionTitle eyebrow="CAREER PATH" title="Professional experience" subtitle="Roles and project contributions based on the experience details provided."/>
          <Box className="timeline">{experience.map((job,i)=><MotionBox key={job.company} className="timeline-item" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .45, delay: i*.08 }}>
            <div className="timeline-marker"/><Box className="timeline-head"><Box><Typography variant="h5" className="company">{job.company}</Typography><Typography color="text.secondary">{job.role}</Typography></Box><Chip label={job.period} className="period-chip"/></Box>
            {job.projects.map(p=><Box key={p.name} className="experience-project"><Typography className="experience-project-title">{p.name}</Typography><Typography color="text.secondary" sx={{ mb: 1 }}>{p.detail}</Typography><ul>{p.bullets.map(b=><li key={b}>{b}</li>)}</ul></Box>)}
          </MotionBox>)}</Box>
        </Box>
        <Box component="section" id="projects" sx={{ pt: 11 }}>
          <SectionTitle eyebrow="SELECTED WORK" title="Projects that solve real problems" subtitle="A selection of web and mobile products spanning merchant operations, customer onboarding, vehicle workflows, and learning."/>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>{categories.map(c=><Button key={c} size="small" onClick={()=>setFilter(c)} className={`filter-btn ${filter===c?'active':''}`}>{c}</Button>)}</Stack>
          <Grid container spacing={2}>{visibleProjects.map((p,i)=><Grid item xs={12} sm={6} md={4} key={p.title}><MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .4, delay: (i%3)*.06 }} whileHover={{ y: -5 }} sx={{ height: '100%' }}>
            <Card className="project-card"><CardContent><Box className="project-icon">{p.icon}</Box><Typography className="project-type">{p.type}</Typography><Typography variant="h5" className="project-title">{p.title}</Typography><Typography color="text.secondary" className="project-desc">{p.desc}</Typography><Stack direction="row" spacing={.7} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>{p.tags.map(t=><Chip key={t} label={t} size="small" className="project-tag"/>)}</Stack></CardContent></Card>
          </MotionBox></Grid>)}</Grid>
        </Box>
        <Box component="section" sx={{ pt: 11 }}>
          <SectionTitle eyebrow="EDUCATION" title="Learning foundation"/>
          <Card className="education-card"><CardContent><Box><Typography variant="h6" sx={{ fontWeight: 700 }}>Bachelor of Technology · Computer Science</Typography><Typography color="text.secondary">BVC Engineering College, Amalapuram</Typography></Box><Chip label="2015" className="period-chip"/></CardContent></Card>
        </Box>
        <Box component="section" id="contact" sx={{ pt: 11, pb: 10 }}>
          <Box className="contact-panel"><div className="contact-shape"/><Typography className="eyebrow">HAVE A PROJECT IN MIND?</Typography><Typography variant="h2" className="contact-title">Let’s build something<br/>useful together.</Typography><Typography color="text.secondary" sx={{ maxWidth: 540, mt: 1.5 }}>Interested in frontend or React Native opportunities? Reach out and let’s connect.</Typography><Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}><Button variant="contained" startIcon={<MailOutlineRoundedIcon />} href="mailto:ravi1993272@gmail.com">ravi1993272@gmail.com</Button><Button variant="outlined" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/bodduri-ravichandra-7aa030110" target="_blank" rel="noreferrer">Connect on LinkedIn</Button></Stack></Box>
        </Box>
      </Container>
    </Box>
    <Box component="footer" className="footer"><Container maxWidth="lg"><Divider sx={{ borderColor: 'rgba(255,255,255,.09)', mb: 2 }}/><Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={1}><Typography variant="caption" color="text.secondary">© {new Date().getFullYear()} Ravichandra Bodduri. Built with React & Material UI.</Typography><Typography variant="caption" color="text.secondary">Designed for clarity · Made responsive</Typography></Stack></Container></Box>
  </>;
}
export default App;