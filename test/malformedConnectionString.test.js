const expect = require('chai').expect;
const parser = require('../index');

describe('#malformedConnectionString', () => {
    it('should find missing port', () => {
        const connectionString = 'Data Source=tcp:database.com;Initial Catalog=numbers;User Id=service@database.com;Password=fjsflregewbfldsfhsew3;';

        expect(() => {
            parser(connectionString);
        }).to.throw(Error);
    });

    it('should find missing host', () => {
        const connectionString = 'Data Source=tcp:1433;Initial Catalog=numbers;User Id=service@database.com;Password=fjsflregewbfldsfhsew3;';

        expect(() => {
            parser(connectionString);
        }).to.throw(Error);
    });

    it('should find missing "Data Source"', () => {
        const connectionString = 'Data=tcp:database.com,1433;Initial Catalog=numbers;User Id=service@database.com;Password=fjsflregewbfldsfhsew3;';

        expect(() => {
            parser(connectionString);
        }).to.throw(Error);
    });

    it('should find missing "User Id"', () => {
        const connectionString = 'Data Source=tcp:database.com,1433;Initial Catalog=numbers;User=service@database.com;Password=fjsflregewbfldsfhsew3;';

        expect(() => {
            parser(connectionString);
        }).to.throw(Error);
    });

    it('should find missing "Initial Catalog"', () => {
        const connectionString = 'Data Source=tcp:database.com,1433;Initial=numbers;User Id=service@database.com;Password=fjsflregewbfldsfhsew3;';

        expect(() => {
            parser(connectionString);
        }).to.throw(Error);
    });

    it('should find missing "Password"', () => {
        const connectionString = 'Data Source=tcp:database.com,1433;Initial Catalog=numbers;User Id=service@database.com;';

        expect(() => {
            parser(connectionString);
        }).to.throw(Error);
    });
});
