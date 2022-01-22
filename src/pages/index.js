import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial/intro">
            <Translate>Docusaurus Tutorial - 5min ⏱️</Translate>            
          </Link>
        </div>
        <br/>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/developer/intro">
            <Translate>Blockchain developer</Translate>            
          </Link>
        </div>        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <h3>
          <Translate
            id="homepage.visitMyBlog"
            description="The homepage message to ask the user to visit my blog"
            values={{blog: <Link to="https://docusaurus.io/blog">blog</Link>}}>
            {'You can also visit my {blog}'}
          </Translate>
        </h3>
        <input
          type="text"
          placeholder={
            translate({
              message: 'Hello',
              description: 'The homepage input placeholder',
            })
          }
        />
      </main>
    </Layout>
  );
}
