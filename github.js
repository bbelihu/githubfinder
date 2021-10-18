class GitHub {
  constructor() {
    this.client_id= '038d1ba140de864c6132';
    this.client_secret= '108497f3068361fde8b351a7ccda0e46af560573';
    this.repos_count = 30;
    this.repos_sort = 'created: asc';

  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sory}client_id${this.client_id}&client_secret${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
  
}