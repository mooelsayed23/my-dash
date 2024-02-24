"use client";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Badge, Dropdown, Space, Table } from "antd";
import { BsCreditCardFill } from "react-icons/bs";

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [{ key: "1", label: "Delete" }];

const App: React.FC = () => {
  const expandedRowRender = () => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Name", dataIndex: "name", key: "name" },
      {
        title: "Status",
        key: "state",
        render: () => <Badge status="success" text="Finished" />,
      },
      { title: "Upgrade Status", dataIndex: "upgradeNum", key: "upgradeNum" },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown menu={{ items }}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: "iphon  " + (i + 11),
        upgradeNum: "Upgraded: 56",
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Platform", dataIndex: "platform", key: "platform" },
    { title: "Version", dataIndex: "version", key: "version" },
    { title: "Upgraded", dataIndex: "upgradeNum", key: "upgradeNum" },
    { title: "Creator", dataIndex: "creator", key: "creator" },
    { title: "Date", dataIndex: "createdAt", key: "createdAt" },
    { title: "Action", key: "operation", render: () => <a>Publish</a> },
  ];

  const data: DataType[] = [
    {
      key: 1,
      name: "iphon",
      platform: "iOS",
      version: "12.3.4",
      upgradeNum: 900,
      creator: "Adam",
      createdAt: "2014-12-24 20:10:00",
    },
    {
      key: 2,
      name: "iphon",
      platform: "iOS",
      version: "13.3.4.5654",
      upgradeNum: 900,
      creator: "abo mazen",
      createdAt: "2014-12-24 23:12:00",
    },
    {
      key: 3,
      name: "iphon",
      platform: "iOS",
      version: "14.3.4.5654",
      upgradeNum: 900,
      creator: "Ali",
      createdAt: "2014-12-24 23:00:00",
    },
  ];

  return (
    <div className=" m-5 w-full grow overflow-x-auto">
      <span className="mb-5 text-3xl flex items-center ms-2">
        
        <BsCreditCardFill className="icon" />
        <span className="ms-2">Orders</span>
      </span>
      <Table
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
        dataSource={data}
      />
    </div>
  );
};

export default App;
