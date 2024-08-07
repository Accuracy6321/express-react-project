import CozyWool from '../assets/cozy-wool.png';
import OrganicCotton from '../assets/organic-cotton.png';
import CozyFleece from '../assets/cozy-fleece.png';
import WeightedBlanket from '../assets/weighted.png';
import KnittedThrow from '../assets/knitted-throw.png';
import HeatedBlanket from '../assets/heated.png';
import Sherpa from '../assets/sherpa.png';
import Bamboo from '../assets/bamboo-blanket.png';
import MicrofiberBlanket from '../assets/sherpa.png';
import DownBlanket from '../assets/down.png';

const getProductImageFromProductId = (productId) => {
  switch (productId) {
    case 1:
      return CozyWool;
    case 2:
      return OrganicCotton;
    case 3:
      return CozyFleece;
    case 4:
      return WeightedBlanket;
    case 5:
      return KnittedThrow;
    case 6:
      return HeatedBlanket;
    case 7:
      return Sherpa;
    case 8:
      return Bamboo;
    case 9:
      return MicrofiberBlanket;
    case 10:
      return DownBlanket;
    default:
      return CozyWool;
  }
}

export default getProductImageFromProductId;