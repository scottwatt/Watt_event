// src/hooks/useNavigation.js
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const useNavigation = () => {
  const history = useHistory();

  const navigate = useCallback((path) => {
    if (history) {
      history.push(path);
    } else {
      window.location.href = path;
    }
  }, [history]);

  return navigate;
};