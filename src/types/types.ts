export interface Slide {
  id: number;
  title?: string;
  company?: string;
  located?: string;
  duration?: string;
  content?: string;
}

export interface SliderProps {
  slides: Slide[];
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}
export interface TextSplitProps {
  text: string;
  fontSize?: string;
  style?: React.CSSProperties;
  fontWeight?: string;
}

export interface FormValues {
  recipientEmail: string;
  subject: string;
  message: string;
}
