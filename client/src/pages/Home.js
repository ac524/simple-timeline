import React from 'react';
import { useQuery } from '@apollo/client';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { QUERY_ME } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const currentUser = data?.me || null;

  return (
    <main>
      <div className="flex-row justify-center">
        <Box sx={{padding: "1rem 0"}}>
          <Button variant="contained" href="/newentry">New Entry</Button>
          <Timeline position="alternate">
          {currentUser?.timeline.map((timeEntry) => (
            <TimelineItem key={timeEntry._id}>
              <TimelineOppositeContent color="text.secondary">
               {timeEntry.startDate}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{timeEntry.name}</TimelineContent>
            </TimelineItem>
          ))}
          </Timeline>
        </Box>
      </div>
    </main>
  );
};

export default Home;
