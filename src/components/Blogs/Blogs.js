import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blog blog-1">
        <h3>Difference between javascript and nodejs</h3>
        <p>
          <span className="text-danger fs-5">1. NodeJS:</span> NodeJS is a
          cross-platform and opensource Javascript runtime environment that
          allows the javascript to be run on the server-side. Nodejs allows
          Javascript code to run outside the browser. Nodejs comes with a lot of
          modules and mostly used in web development.
          <br />
          <span className="text-danger fs-5">2. JavaScript:</span> Javascript is
          a Scripting language. It is mostly abbreviated as JS. It can be said
          that Javascript is the updated version of the ECMA script. Javascript
          is a high-level programming language that uses the concept of Oops but
          it is based on prototype inheritance. Difference between Nodejs and
          JavaScript.
        </p>
      </div>
      <div className="blog blog-2">
        <h3>When should you use nodejs and when should you use mongodb</h3>
        <p>
          Nodejs is a Javascript engine that you can write any application you
          want with (by programming in the Javascript language). It runs your
          Javascript code. Most commonly, it is used to build servers that can
          respond to web requests, though it can be used for lots of other types
          of code too. MongoDB is a database engine. Code within some
          application or server uses MongoDB to save, query or update data in a
          database. There are many web servers built with nodejs that will then
          use MongoDB for storing data. MongoDB offers an API library that runs
          within a Nodejs application to give you programmatic access to MongoDB
          so you can create databases and then add, query, update or delete data
          from the MongoDB database. MongoDB also has API libraries for other
          programming environments such as Python, Java, etc... These two
          technologies are for different parts of a typical web server system.
          You don't substitute one for the other. Instead, you can use them
          together.
        </p>
      </div>
      <div className="blog blog-3">
        <h3>Differences between sql and nosql databases.</h3>
        <p>
          <span className="text-danger fs-5">1. SQL:</span> RELATIONAL DATABASE
          MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or
          predefined schema. These databases are not suited for hierarchical
          data storage. These databases are best suited for complex queries.
          Vertically Scalable. Follows ACID property
          <br />
          <span className="text-danger fs-5">2. NoSQL:</span> Non-relational or
          distributed database system. They have dynamic schema. These databases
          are best suited for hierarchical data storage. These databases are not
          so good for complex queries & Horizontally scalable. Follows
          CAP(consistency, availability, partition tolerance).
        </p>
      </div>
      <div className="blog blog-4">
        <h3>What is the purpose of jwt and how does it work</h3>
        <p>
          <span className="text-danger fs-5">
            1. What is the purpose of jwt:
          </span>{" "}
          JWT or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
          <br />
          <span className="text-danger fs-5">2. how does it work:</span> JWTs
          differ from other web tokens in that they contain a set of claims.
          Claims are used to transmit information between two parties. What
          these claims are depends on the use case at hand. For example, a claim
          may assert who issued the token, how long it is valid for, or what
          permissions the client has been granted. A JWT is a string made up of
          three parts, separated by dots (.), and serialized using base64.. This
          information is typically used by the server to verify that the user
          has permission to perform the action they are requesting.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
