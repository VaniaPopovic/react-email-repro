import {
  Adapter,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "@auth/core/adapters";

// 2. A function that returns an object. Official adapters use this pattern.
export function MyAdapter(config: any): Adapter {
  // Instantiate a client/ORM here with the provided config, or pass it in as a parameter.
  // Usually, you might already have a client instance elsewhere in your application,
  // so you should only create a new instance if you need to or you don't have one.

  return {
    async createUser(data) {
      const id = crypto.randomUUID();

      return await Promise.resolve({ ...data, id });
    },
    async getUser(data) {
      const user: AdapterUser = {
        id: "1",
        name: "test",
        email: "",
        emailVerified: new Date(),
      };
      return Promise.resolve(user);
    },
    async getUserByEmail(data) {
      const user: AdapterUser = {
        id: "1",
        name: "test",
        email: "",
        emailVerified: new Date(),
      };
      return Promise.resolve(user);
    },
    async createSession(data) {
      const session: AdapterSession = {
        userId: "1",
        expires: new Date(),
        sessionToken: "1",
      };
      return Promise.resolve(session);
    },
    async getSessionAndUser(data) {
      const session: AdapterSession = {
        userId: "1",
        expires: new Date(),
        sessionToken: "1",
      };
      const user: AdapterUser = {
        id: "1",
        name: "test",
        email: "",
        emailVerified: new Date(),
      };
      return Promise.resolve({ session, user });
    },
    async updateUser(data) {
      const user: AdapterUser = {
        id: "1",
        name: "test",
        email: "",
        emailVerified: new Date(),
      };
      return Promise.resolve(user);
    },
    async updateSession(data) {
      return null;
    },
    async linkAccount(rawAccount) {
      return null;
    },
    async getUserByAccount(account) {
      return null;
    },
    async deleteSession(sessionToken) {
      return null;
    },
    async createVerificationToken(token) {
      return null;
    },
    async useVerificationToken(token) {
      const tokenN: VerificationToken = {
        identifier: "1",
        token: "1",
        expires: new Date(),
      };
      return Promise.resolve(tokenN);
    },
    async deleteUser(id) {
      return null;
    },
    async unlinkAccount(account) {
      return undefined;
    },
  };
}
