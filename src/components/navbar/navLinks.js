import { ReactComponent as fBLogo } from "../../images/icons/facebookLogo.svg";
import { ReactComponent as gLLogo } from "../../images/icons/googleLogo.svg";
import { ReactComponent as iNLogo } from "../../images/icons/instaLogo.svg";
import { ReactComponent as tWLogo } from "../../images/icons/twitterLogo.svg";


const links = [
    {
      name: "Hjem",
      route: "/"
    },
    {
      name: "Rumfærgen",
      route: "/Spaceship"
    },
    {
      name: "Ture",
      route: "/Trips"
    },
    {
      name: "Galleri",
      route: "/Gallery"
    },
    {
      name: "Sikkerhed",
      route: "/Security"
    },
    {
      name: "Kontakt",
      route: "/Contact"
    },
  ]

  const icons = [fBLogo, tWLogo, gLLogo, iNLogo];

export { links, icons };