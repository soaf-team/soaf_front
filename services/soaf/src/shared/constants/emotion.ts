import { EmotionDetail, EmotionKey } from "../types";

import angry from "@assets/emotions/angry.svg";
import anxious from "@assets/emotions/anxious.svg";
import comportable from "@assets/emotions/comportable.svg";
import flutter from "@assets/emotions/flutter.svg";
import funny from "@assets/emotions/funny.svg";
import gloomy from "@assets/emotions/gloomy.svg";
import happy from "@assets/emotions/happy.svg";
import lonely from "@assets/emotions/lonely.svg";
import proud from "@assets/emotions/proud.svg";
import pleased from "@assets/emotions/pleased.svg";
import sad from "@assets/emotions/sad.svg";
import tired from "@assets/emotions/tired.svg";

export const EMOTIONS: Record<EmotionKey, EmotionDetail> = {
  행복한: { icon: happy, color: "bg-happy", noun: "행복" },
  기분좋은: { icon: pleased, color: "bg-pleased", noun: "기분 좋음" },
  즐거운: { icon: funny, color: "bg-funny", noun: "즐거움" },
  설레는: { icon: flutter, color: "bg-flutter", noun: "설렘" },
  뿌듯한: { icon: proud, color: "bg-proud", noun: "뿌듯" },
  편안한: { icon: comportable, color: "bg-comportable", noun: "편안" },
  피곤한: { icon: tired, color: "bg-tired", noun: "피곤" },
  외로운: { icon: lonely, color: "bg-lonely", noun: "외로움" },
  슬픈: { icon: sad, color: "bg-sad", noun: "슬픔" },
  우울한: { icon: gloomy, color: "bg-gloomy", noun: "우울" },
  불안한: { icon: anxious, color: "bg-anxious", noun: "불안" },
  화난: { icon: angry, color: "bg-angry", noun: "화남" },
};
