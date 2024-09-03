import './App.css';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './themes/theme';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import { Grid, CircularProgress, Box, Typography } from '@mui/material';
import Modal from './components/Card/Modal';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase/config';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      const coursesCollection = collection(firestore, 'courses');
      const coursesSnapshot = await getDocs(coursesCollection);
      const coursesList = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCourses(coursesList);
    } catch (error) {
      setError('Error fetching courses');
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header onAddCourseClick={handleOpenModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Grid container justifyContent='center'>
        <Grid item xs={10}>
          <Search />
          {loading && (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
              <CircularProgress />
            </Box>
          )}
          {error && (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
              <Typography color="error">{error}</Typography>
            </Box>
          )}
          {!loading && !error && courses.map(data => (
            <Card key={data.id} {...data} />
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
