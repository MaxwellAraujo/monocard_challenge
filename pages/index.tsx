import {
  Heading,
  Grid,
  Box,
  Image,
  Icon,
  Text,
  Link,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdSaveAlt } from "react-icons/md";
import {
  FaEnvelope,
  FaPhone,
  FaShareAlt,
  FaUserLock,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaSkype,
  FaTelegram,
} from "react-icons/fa";

export default function UserPerfil() {
  const [perfil, serPerfil] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function perfilUser() {
    const resp = await fetch("/api/perfil");
    const data = await resp.json();
    console.log(data);
    console.log(data.nome);
    serPerfil(data);
  }
  useEffect(() => {
    perfilUser();
  }, []);

  return (
    <>
      <Box backdropFilter="blur(5px)" />

      <Box
        as="body"
        backgroundImage='url("https://monocard.com.br/wp-content/uploads/2021/06/d879262ee7a6773d93849f6f42287716_picture-300x300.jpg")'
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
        backgroundPosition="right top"
        backgroundAttachment="fixed"
      ></Box>

      <Box
        as="header"
        bg="#202024"
        maxWidth="500px"
        margin="auto"
        color="white"
        display="flex"
        marginTop="27px"
        borderRadius="md"
      >
        <Image
          position="absolute"
          top="-6"
          borderRadius="full"
          boxSize="64px"
          src={perfil.empresa && perfil.empresa.profile_pic}
        />

        <div>
          <Image boxSize="150px" objectFit="cover" src={perfil.profile_pic} />
        </div>
        <Box padding="20px">
          <Heading margin="10px 0 0 0" size="md">
            {perfil.nome}
          </Heading>
          <Box margin="0 0 10px">@lucas</Box>
          <p>diretor de tecnologia da revirtua</p>
        </Box>
        <Box padding="10px" display="flex">
          <a href="https://monocard.com.br/wp-admin/admin-ajax.php?action=download_vcard&id=lucas">
            salvar
            <Icon as={MdSaveAlt} />
          </a>
        </Box>
      </Box>
      <Grid
        templateRows="repeat(1, fr)"
        maxWidth="550px"
        margin="auto"
        marginTop="10px"
      >
        <Link href="https://www.linkedin.com/in/lucasmscampos/" isExternal>
          <Box
            bg="#202024"
            borderBottom="5px solid #2b2b2b"
            p={5}
            margin="10px 25px"
            color="white"
            display="flex"
            alignItems="center"
            cursor="pointer"
            borderRadius="md"
            _hover={{
              backgroundColor: "black",
              padding: "22px 25px",
              margin: "8px",
              transitionProperty: "all",
              transitionDuration: "0.3s",
              transitionDelay: "0s",
            }}
          >
            <Image
              height="24px"
              margin="0 10px 0 0"
              src={
                "https://www.google.com/s2/favicons?sz=24&domain_url=https://www.linkedin.com"
              }
            />
            <Heading size="sm" width="100%">
              {perfil && perfil.links[0].title}
            </Heading>
            <Text margin="10px 0px">Acessar</Text>
          </Box>
        </Link>
        <Link href="mailto:Contato@monocard.com.br" isExternal>
          <Box
            bg="#202024"
            borderBottom="5px solid #2b2b2b"
            p={5}
            margin="10px 25px"
            color="white"
            display="flex"
            alignItems="center"
            cursor="pointer"
            borderRadius="md"
            _hover={{
              backgroundColor: "black",
              padding: "22px 25px",
              margin: "8px",
              transitionProperty: "all",
              transitionDuration: "0.3s",
              transitionDelay: "0s",
            }}
          >
            <Icon margin="0 10px 0 0" as={FaEnvelope} />
            <Box width="100%">
              <Heading size="sm">{perfil && perfil.links[1].title}</Heading>
              <Text fontSize="xs">{perfil && perfil.links[1].description}</Text>
            </Box>
            <Text margin="10px 0px">Acessar</Text>
          </Box>
        </Link>
        <Link href="https://wa.me/5531994184444" isExternal>
          <Box
            bg="#202024"
            borderBottom="5px solid #2b2b2b"
            p={5}
            margin="10px 25px"
            color="white"
            display="flex"
            alignItems="center"
            cursor="pointer"
            borderRadius="md"
            _hover={{
              backgroundColor: "black",
              padding: "22px 25px",
              margin: "8px",
              transitionProperty: "all",
              transitionDuration: "0.3s",
              transitionDelay: "0s",
            }}
          >
            <Image
              height="24px"
              margin="0 10px 0 0"
              src={
                "https://www.google.com/s2/favicons?sz=24&domain_url=https://wa.me"
              }
            />
            <Box width="100%">
              <Heading size="sm">{perfil && perfil.links[2].title}</Heading>
              <Text fontSize="xs">{perfil && perfil.links[2].description}</Text>
            </Box>
            <Text margin="10px 0px">Acessar</Text>
          </Box>
        </Link>
        <Link href="tel:31994184444" isExternal>
          <Box
            bg="#202024"
            borderBottom="5px solid #2b2b2b"
            p={5}
            margin="10px 25px"
            color="white"
            display="flex"
            alignItems="center"
            cursor="pointer"
            borderRadius="md"
            _hover={{
              backgroundColor: "black",
              padding: "22px 25px",
              margin: "8px",
              transitionProperty: "all",
              transitionDuration: "0.3s",
              transitionDelay: "0s",
            }}
          >
            <Icon margin="0 10px 0 0" as={FaPhone} />
            <Box width="100%">
              <Heading size="sm">{perfil && perfil.links[3].title}</Heading>
              <Text fontSize="xs">{perfil && perfil.links[3].description}</Text>
            </Box>
            <Text margin="10px 0px">Acessar</Text>
          </Box>
        </Link>
        <Link href="https://wa.me/553199389031" isExternal>
          <Box
            bg="#202024"
            borderBottom="5px solid #2b2b2b"
            p={5}
            margin="10px 25px"
            color="white"
            display="flex"
            alignItems="center"
            cursor="pointer"
            borderRadius="md"
            _hover={{
              backgroundColor: "black",
              padding: "22px 25px",
              margin: "8px",
              transitionProperty: "all",
              transitionDuration: "0.3s",
              transitionDelay: "0s",
            }}
          >
            <Image
              height="24px"
              margin="0 10px 0 0"
              src={
                "https://www.google.com/s2/favicons?sz=24&domain_url=https://wa.me"
              }
            />
            <Box width="100%">
              <Heading size="sm">{perfil && perfil.links[2].title}</Heading>
              <Text fontSize="xs">{perfil && perfil.links[2].title}</Text>
            </Box>
            <Text margin="10px 0px">Acessar</Text>
          </Box>
        </Link>
        <Link
          href="https://www.google.com/maps?q=Av.+Ver.+Jose+diniz+3725+-+campo+belo"
          isExternal
        >
          <Box
            bg="#202024"
            borderBottom="5px solid #2b2b2b"
            p={5}
            margin="10px 25px"
            color="white"
            display="flex"
            alignItems="center"
            cursor="pointer"
            borderRadius="md"
            _hover={{
              backgroundColor: "black",
              padding: "22px 25px",
              margin: "8px",
              transitionProperty: "all",
              transitionDuration: "0.3s",
              transitionDelay: "0s",
            }}
          >
            <Image
              height="24px"
              margin="0 10px 0 0"
              src={
                "https://www.google.com/s2/favicons?sz=24&domain_url=http://maps.google.com"
              }
            />
            <Box width="100%">
              <Heading size="sm">Endereço (Google Maps)</Heading>
              <Text fontSize="xs">Endereço (Google Maps)</Text>
            </Box>
            <Text margin="10px 0px">Acessar</Text>
          </Box>
        </Link>
        <Link href="https://www.google.com/maps?q=bh+shopping" isExternal>
          <Box
            bg="#202024"
            borderBottom="5px solid #2b2b2b"
            p={5}
            margin="10px 25px"
            color="white"
            display="flex"
            alignItems="center"
            cursor="pointer"
            borderRadius="md"
            _hover={{
              backgroundColor: "black",
              padding: "22px 25px",
              margin: "8px",
              transitionProperty: "all",
              transitionDuration: "0.3s",
              transitionDelay: "0s",
            }}
          >
            <Image
              height="24px"
              margin="0 10px 0 0"
              src={
                "https://www.google.com/s2/favicons?sz=24&domain_url=http://maps.google.com"
              }
            />
            <Box width="100%">
              <Heading size="sm">Endereço (Google Maps)</Heading>
              <Text fontSize="xs">Endereço (Google Maps)</Text>
            </Box>
            <Text margin="10px 0px">Acessar</Text>
          </Box>
        </Link>
      </Grid>
      <Grid
        templateRows="repeat(1, fr)"
        padding="0 50px"
        position="fixed"
        bottom="0"
        width="100%"
        backdropFilter="blur(5px)"
      >
        <Box
          as="footer"
          gap={3}
          bg="transparent"
          color="white"
          padding="5px"
          display="flex"
          cursor="pointer"
          border="15px"
          bottom="0"
          margin="auto"
        >
          <Link href="https://monocard.com.br/minha-conta/">
            <Image cursor="pointer" fontSize="25px" as={FaUserLock} />
          </Link>
          <a href="https://monocard.com.br/?ref=lucas">
            <Box
              fontSize="16px"
              padding="0 90px"
              textAlign="center"
              cursor="pointer"
              width="100%"
            >
              monocard.com.br
            </Box>
          </a>
          <Text
            onClick={onOpen}
            cursor="pointer"
            fontSize="26px"
            as={FaShareAlt}
          ></Text>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent backgroundColor="black" color="white">
              <ModalHeader fontSize="25px" color="white">
                Compartilhe seu monocard
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Grid
                  backgroundColor="black"
                  color="white"
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(2, 1fr)"
                  gap={2}
                  height="200px"
                >
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?text=*Lucas%20Campos*%0Adiretor%20de%20tecnologias%20da%20revirtua%0Ahttps://mono.direct/lucas"
                  >
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text
                        minWidth="20px"
                        fontSize="25px"
                        as={FaWhatsapp}
                      ></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        WhatsApp
                      </Text>
                    </Box>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fmono.direct%252Flucas&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=pt_BR"
                  >
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text
                        minWidth="20px"
                        fontSize="25px"
                        as={FaFacebook}
                      ></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        Facebook
                      </Text>
                    </Box>
                  </a>
                  <a
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=diretor%20de%20tecnologias%20da%20revirtua%20https://mono.direct/lucas"
                  >
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text
                        minWidth="20px"
                        fontSize="25px"
                        as={FaTwitter}
                      ></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        Twitter
                      </Text>
                    </Box>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmono.direct%2Flucas"
                  >
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text
                        minWidth="20px"
                        fontSize="25px"
                        as={FaLinkedin}
                      ></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        Linkedin
                      </Text>
                    </Box>
                  </a>
                  <a
                    target="_blank"
                    href="https://br.pinterest.com/pin/create/button/?url=https://mono.direct/lucas&media="
                  >
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text
                        minWidth="20px"
                        fontSize="25px"
                        as={FaPinterest}
                      ></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        Pinterest
                      </Text>
                    </Box>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.reddit.com/submit?url=https://mono.direct/lucas&title=Lucas%20Campos"
                  >
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text
                        minWidth="20px"
                        fontSize="25px"
                        as={FaReddit}
                      ></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        Reddit
                      </Text>
                    </Box>
                  </a>
                  <a
                    target="_blank"
                    href="https://web.skype.com/share?url=https://mono.direct/lucas"
                  >
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text minWidth="20px" fontSize="25px" as={FaSkype}></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        Skype
                      </Text>
                    </Box>
                  </a>
                  <a
                    target="_blank"
                    href="https://telegram.me/share/url?url=https://mono.direct/lucas&text=diretor%20de%20tecnologias%20da%20revirtua"
                  >
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text
                        minWidth="20px"
                        fontSize="25px"
                        as={FaTelegram}
                      ></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        Telegram
                      </Text>
                    </Box>
                  </a>
                  <a target="_blank" href="mailto:Contato@monocard.com.br">
                    <Box
                      alignItems="center"
                      display="flex"
                      w="100%"
                      h="10"
                      bg="black"
                    >
                      <Text
                        minWidth="20px"
                        fontSize="25px"
                        as={FaEnvelope}
                      ></Text>
                      <Text paddingLeft="5px" width="100%" fontSize="20px">
                        Email
                      </Text>
                    </Box>
                  </a>
                </Grid>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Grid>
    </>
  );
}
