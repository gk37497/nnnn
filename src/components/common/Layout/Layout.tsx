import cn from 'clsx';
import dynamic from 'next/dynamic';
import React from 'react';

import LoginView from '@/components/auth/LoginView';
import { useUI } from '@/components/ui/context';
import LoadingDots from '@/components/ui/LoadingDots';

import { Navbar } from '../Navbar';
import s from './Layout.module.css';

const Loading = () => (
  <div className="flex h-80 w-80 items-center justify-center p-3 text-center">
    <LoadingDots />
  </div>
);

const dynamicProps = {
  loading: Loading,
};

const Modal = dynamic(() => import('@/components/ui/Modal'), {
  ...dynamicProps,
  ssr: false,
});

export interface Props {
  pageProps: {
    pages?: [];
  };
  children?: React.ReactNode;
}

const ModalView: React.FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_VIEW' && <LoginView />}
    </Modal>
  );
};

const ModalUI: React.FC = () => {
  const { displayModal, closeModal, modalView } = useUI();
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={cn(s.root)}>
      <Navbar />
      <main className="fit">{children}</main>
      {/* <Footer /> */}
      <ModalUI />
    </div>
  );
};

export default Layout;
