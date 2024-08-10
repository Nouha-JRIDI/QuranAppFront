export interface ModalProps {
  closeModal: () => void;
  type: string;
}
interface NavigationItem {
  name: string;
  href: string;
}
export interface NavbarProps {
  navigation: NavigationItem[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface InputProps {
  id: string;
  name: string;
}

export interface SelectProps {
  children: ReactNode; 
  id: string;
  name: string;
}