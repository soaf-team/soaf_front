type Diary = {
  post_id: string;
  post_user_id: string;
  post_contents: string;
  post_is_public: boolean;
  post_created_at: string;
};

type FormattedDiary = {
  id: string;
  authorId: string;
  content: string;
  date: string;
  isPublic: boolean;
};

const DIARY_KEYS: { [key in keyof Diary]: keyof FormattedDiary } = {
  post_id: "id",
  post_user_id: "authorId",
  post_contents: "content",
  post_created_at: "date",
  post_is_public: "isPublic",
};

export class DiaryFormatter {
  diary: Diary;

  constructor(diary: Diary) {
    this.diary = diary;
  }

  format(): FormattedDiary {
    return Object.entries(this.diary).reduce((formattedDiary, [key, value]) => {
      if (Object.prototype.hasOwnProperty.call(DIARY_KEYS, key)) {
        const formattedKey = DIARY_KEYS[key as keyof Diary];
        (formattedDiary[formattedKey] as unknown) = value;
      }
      return formattedDiary;
    }, {} as FormattedDiary);
  }
}
