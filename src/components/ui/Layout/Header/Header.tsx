import { useState } from "react";

import Navigation from "@/components/ui/Layout/Header/Navigation";

import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Input from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/button";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import Modal from "@/components/ui/Modal/Modal";
import CardModalPostJob from "../../Cards/CardModalPostJob";

//! Header компонент содержит в себе state модального окна и передает его Modal и CardModalPostJob
// * Содержит в себе компоненты Navigation, Container, Icon, Input, Button, Dropdown, Modal, CardModalPostJob подробнее в самих компонентах

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // * Single Responseability principe instead of function which can invert values
  const openModalHandler = () => setIsModalOpen(() => true);
  const closeModalHandler = () => setIsModalOpen(() => false);

  return (
    <header>
      <Navigation />
      <Container className="Gray/White flex justify-between border-b py-5 ">
        <div className="flex items-center ">
          <Icon name="CaseSvg" />
          <h2 className="pl-2 pr-8 text-2xl font-semibold  max-[975px]:pr-4 max-[975px]:text-xl">
            Jobpilot
          </h2>

          <div className="flex flex-1 flex-row rounded-[5px] border bg-Gray/White px-6 py-[9px] ">
            <div className="border-r border-gray-100 pr-[20px]">
              <Dropdown defaultLanguage="Kazakh" />
            </div>

            <div className="flex pl-[20px]">
              <Icon name="SearchSvg" />
              <Input
                type="text"
                placeholder="Job title, keyword, company "
                className="ml-[12px] w-[450px] focus:outline-none max-[1480px]:w-[400px] max-[1380px]:w-[300px] max-[1040px]:w-[250px] max-[975px]:w-[200px]"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <Button variant="outline">Sign In</Button>
          <Button onClick={openModalHandler}>Post A Job</Button>
        </div>
      </Container>

      <Modal onBackdropClick={closeModalHandler} isModalOpen={isModalOpen}>
        <CardModalPostJob onCloseModal={closeModalHandler} />
      </Modal>
    </header>
  );
};

export default Header;
