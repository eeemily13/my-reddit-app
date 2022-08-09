export const getComments = async () => {
  return [
    {
      id: "1",
      body: "this dog is super cute",
      username: "puppyLOVE4life",
      userId: "",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "I LOVE HIM <3<3<3",
      username: "Labs4EVA",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "so right i just want to take him home",
      username: "animalExpert1232",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "awwwwwwwwwwww",
      username: "dogs=life=love=laugh",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async ( text, parentId = null) => {
    return{
        id: Math.random().toString(36).substr(2,9),
        body: text,
        parentId,
        userId: "1",
        username: "CoolBackFlippinDogs",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};