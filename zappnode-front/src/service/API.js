const API = {
  // user for /api/users routes
  users: {
    POST: async (user) => {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
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
          body: JSON.stringify({ type: monitor_type, monitor: monitor, user_id: user_id }),
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
          body: JSON.stringify({ user_id: user_id, monitor: monitor }),
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
      POST: () => {},
      GET: () => {},
      PUT: () => {},
    },
  },

  //use for /api/auth routes
  auth: {
    signup: () => {},
    logout: () => {},
    google: () => {},
    local: () => {},
  },

  //use for /api/alerts routes
  alerts: {},
};

module.exports = { API };
