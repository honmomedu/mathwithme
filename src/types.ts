import React from 'react';

export interface Step {
  id: string;
  title: string;
  tip: string;
  answerTitle: string;
  answerContent: React.ReactNode;
}

export interface Exercise {
  id: string;
  label: string;
  equationDisplay: React.ReactNode;
  steps: Step[];
}
