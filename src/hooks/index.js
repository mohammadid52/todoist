/* eslint-disable no-nested-ternary */

import { useState, useEffect } from 'react';
import moment from 'moment';
import firebase from '../firebase';
import { collatedTasksExits } from '../helpers';

const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubsribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'YZKcCCEmB7vOeFnZav5h');

    unsubsribe =
      selectedProject && !collatedTasksExits(selectedProject)
        ? (unsubsribe = unsubsribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubsribe = unsubsribe.where('date', '==', moment().format('DD/MM/YYYY')))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubsribe = unsubsribe.where('date', '==', ''))
        : unsubsribe;
  }, [selectedProject]);

  return {};
};
