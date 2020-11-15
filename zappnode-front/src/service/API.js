//data definitions
class User {
  constructor({
    name = 'DEFAULT',
    email = 'DEFAULT',
    password = 'DEFAULT',
    googleID = 'DEFAULT',
    facebookID = 'DEFAULT',
    role = 'user',
    plan = 'DEFAULT',
    members = [],
    monitors = [],
    timezone = 'DEFAULT',
  }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.googleID = googleID;
    this.facebookID = facebookID;
    this.role = role;
    this.plan = plan;
    this.members = members;
    this.monitors = monitors;
    this.timezone = timezone;
  }
}

class Monitor {
  constructor({
    title = 'DEFAULT',
    created_at = new Date(),
    active = true,
    isUp = true,
    paused = false,
    totalRequests = 0,
    lastRequest = new Date(),
    totalDownTimes = 0,
    lastDownTime = new Date(),
    interval = 5,
  }) {
    this.title = title;
    this.created_at = created_at;
    this.active = active;
    this.isUp = isUp;
    this.paused = paused;
    this.totalRequests = totalRequests;
    this.lastRequest = lastRequest;
    this.totalDownTimes = totalDownTimes;
    this.lastDownTime = lastDownTime;
    this.interval = interval;
  }
}

const API = {
  // user for /api/users routes
  users: {
    POST: async (user) => {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new User(user)),
      }).then((res) => res.json());
      return res;
    },

    GET: async (user_id) => {
      const res = await fetch('/api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user_id),
      }).then((res) => res.json());
      return res;
    },

    PATCH: async (data) => {
      const res = await fetch('/api/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data }),
      }).then((res) => res.json());
      return res;
    },

    DELETE: async () => {
      const res = await fetch('/api/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(null),
      }).then((res) => res.json());
      return res;
    },

    // user for /api/users/monitor routes
    monitor: {
      POST: async (monitor_type, monitor, user_id) => {
        const res = await fetch('/api/users/monitor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: monitor_type, monitor: new Monitor(monitor), user_id: user_id }),
        }).then((res) => res.json());
        return res;
      },

      GET: async (user_id, monitor_id) => {
        const res = await fetch('/api/users/monitor', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user_id, monitor_id: monitor_id }),
        }).then((res) => res.json());
        return res;
      },

      PUT: async (user_id, monitor) => {
        const res = await fetch('/api/users/monitor', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user_id, monitor: new Monitor(monitor) }),
        }).then((res) => res.json());
        return res;
      },

      DELETE: async (user_id, monitor_id) => {
        const res = await fetch('/api/users/monitor', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user_id, monitor_id: monitor_id }),
        }).then((res) => res.json());
        return res;
      },
    },

    //user for /api/users/member routes
    member: {
      POST: async (user_id, member_id) => {
        const res = await fetch('/api/users/member', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user_id, member_id: member_id }),
        }).then((res) => res.json());
        return res;
      },

      GET: async (member_id) => {
        const res = await fetch('/api/users/member', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(member_id),
        }).then((res) => res.json());
        return res;
      },

      PUT: async () => {
        const res = await fetch('/api/users/member', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(null),
        }).then((res) => res.json());
        return res;
      },

      DELETE: async (user_id, member_id) => {
        const res = await fetch('/api/users/member', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user_id, member_id: member_id }),
        }).then((res) => res.json());
        return res;
      },
    },
  },

  //user for /api/members routes
  members: {
    //use for /api/member/monitor routes
    monitor: {
      POST: async (monitor_type, monitor, user_id) => {
        const res = await fetch('/api/users/monitor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: monitor_type, monitor: new Monitor(monitor), user_id: user_id }),
        }).then((res) => res.json());
        return res;
      },

      GET: async (user_id, monitor_id) => {
        const res = await fetch('/api/users/monitor', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user_id, monitor_id: monitor_id }),
        }).then((res) => res.json());
        return res;
      },

      PUT: async (user_id, monitor) => {
        const res = await fetch('/api/users/monitor', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user_id, monitor: new Monitor(monitor) }),
        }).then((res) => res.json());
        return res;
      },
    },
  },

  //use for /api/auth routes
  auth: {
    signup: async (name, email, password) => {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, password: password }),
      }).then((res) => res.json());
      return res;
    },

    logout: async () => {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(null),
      }).then((res) => res.json());
      return res;
    },

    google: async () => {},

    local: async ({ email, password }) => {
      const res = await fetch('/api/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
      }).then((res) => res.json());
      return res;
    },
  },

  //use for /api/alerts routes
  alerts: {},
};

module.exports = { API, User, Monitor };
