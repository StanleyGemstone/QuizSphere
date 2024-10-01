import axios from 'axios';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get('(https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple)', {
      params: {
        amount: 10,
        category: 19,
        difficulty: 'medium',
        type: 'multiple',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
